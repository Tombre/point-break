import _ from 'lodash';
import mori from 'mori';
// import joi from 'joi';

import { createReducer, createSelector, selectPath } from 'store/utils';
import { schema } from './schema';
import { callAPI } from 'store/api';
import { where } from 'helper/mori';


/*----------------------------------------------------------
	Settings
----------------------------------------------------------*/

const data_config = {
	index : 'id', // the attribute to use as an index. If not set, will use the unique data id
	// validationSchema : _.mapValues(schema, (value) => {
	// 	return joi.object().keys(value.attributes);
	// })
};

/*----------------------------------------------------------
	Actions
----------------------------------------------------------*/

// Inserts a new record. Accepts an object describing the record.
const INSERT = 'DATA_INSERT';
export function insert(collectionName, record, sync = true) {
	if (mori.isCollection(record)) {
		record = mori.toJs(record);
	}
	return {
		type : INSERT,
		payload : {
			collectionName,
			record,
			sync
		}
	};
}

// Creates an action which updates a single record. Accepts the id of the record and an object to update it with.
const UPDATE = 'DATA_UPDATE';
export function update(collectionName, id, record, sync = true) {

	if (mori.isCollection(id)) {
		record = mori.toJs(id);
		id = mori.get(id, 'id');
	}

	// Make sure to create copy of the record object with the id
	record = _.assign({ id }, record);

	let payload = {collectionName, sync, id, record };

	return { type : UPDATE, payload };
}

// Sets an array of records that have been passed along from the server.
const SET_RESPONSE = 'DATA_SET_RESPONSE';
export function setResponse(collectionName, records) {
	return {
		type : SET_RESPONSE,
		payload : {
			collectionName,
			records,
		}
	};
}

// Creates an action which destroys a single record.
const DESTROY = 'DATA_DELETE';
export function destory(collectionName, id, sync = true) {

	if (mori.isCollection(id)) {
		id = mori.get(id, 'id');
	}

	return {
		type : DESTROY,
		payload : {
			collectionName,
			id,
			sync
		}
	};
}

// Creates an action which runs a query for a particular record.
const FETCH = 'DATA_FETCH';
export function fetch(collectionName, query = {}, options = {}) {
		
	let action = {
		type : FETCH,
		payload : {
			collectionName,
			query,
			// The force query forces the api request to append the query to the GET requests. Usually it would be removed if an ID is present
			forceQuery : options.forceQuery
		}
	};
	
	//  If you pass true or a function as the checkCache option, this method will first check the cache before running the action. If there is nothing in the
	// state, the fetch action is run. If checkCache is a function, it is treated as a selector.
	if (options.checkCache) {
		return function(dispatch, getState) {
			let selector = _.isFunction(options.checkCache) ? options.checkCache : createSelector(selectPath('DATA', collectionName), _.partial(where, query));
			if (!getState(selector)) dispatch(action);
		}
	}

	return action;
}

// Inserts a new record. Accepts an object describing the record.
const CLEAR = 'DATA_CLEAR';
export function clear() {
	return {
		type : CLEAR,
		payload : {}
	};
}



/*----------------------------------------------------------
	Reducer
----------------------------------------------------------*/

export const reducer = createReducer([INSERT, SET_RESPONSE, UPDATE, DESTROY, CLEAR], function(state, action) {

	let collectionName = action.payload.collectionName;
	let collection = mori.get(state, collectionName);

	if ( !mori.isCollection(collection) ) {
		throw new Error(`The collection "${collectionName}" doesn't exist in the data store. You probably tried to add to it accidently or haven't set it up in the schema`);
	}

	switch (action.type) {
		case INSERT:
		case SET_RESPONSE:
		case UPDATE:
			let records = action.payload.record || action.payload.records;
			records = _.isArray(records) ? records : [records];
			state = mori.assoc(state, collectionName, setData(collection, records));
			break;
		case DESTROY:
			state = mori.assoc(state, deleteData(collection, action.payload.id));
			break;
		case CLEAR:
			state = createStructure();
		break;
		default:
			return state;
	}

	return state;

}, createStructure);

/*----------------------------------------------------------
	Lib
----------------------------------------------------------*/

// create a state structure of the collection
function createStructure() {
	let map = [];
	for (let collection in schema) {
		map.push(collection, mori.hashMap());
	}
	return mori.hashMap(...map);
}

// sets an array of records (objects) to a collection. This method will use an index if one exists, else it will create a unique data point
function setData(collection, records = []) {

	let recordMap = mori.hashMap();

	for (var i = records.length - 1; i >= 0; i--) {

		let record = records[i];
		let id = _.get(record, data_config.index);

		if (!id) {
			id = _.uniqueId('data_');
			record = _.assign({ id }, record);
		}

		recordMap = mori.assoc(recordMap, id, mori.toClj(record));

	};

	return mori.merge(collection, recordMap);

}

function deleteData(collection, id) {
	return mori.dissoc(collection, id);
}

/*----------------------------------------------------------
	Middleware
----------------------------------------------------------*/

// intercepts fetch requests and makes an api call. Responses are then synced with the store.
export const fetchDataMiddleware = store => next => action => {

	if (action.type !== FETCH) {
		return next(action);
	}

	// pass the action on through the chain so any other bit of middleware picks it up.
	next(action);

	let options = action.payload;
	let params = {
		url : 'http://52.62.76.183:4001/api' + schema[options.collectionName].endpoint,
		query : options.query,
		method : 'GET'
	};

	// if there is an ID just use that as the endpoint with no query
	if (params.query.id) {
		params.url += params.query.id + '/';
		if (!options.forceQuery) {
			console.log(options.forceQuery);
			delete params.query;
		}
	}

	// dispatch the fetch call and return the promise to the dispatch function
	return store.dispatch(callAPI(params))
		.then((response) => {

			// models need to be transformed
			let models, body;

			body = response.body;
			models = body.id ? [body] : ( _.isArray(body) ? body : body.results);

			// Add all the responses to the store by dispatching the setResponse action
			store.dispatch(setResponse(action.payload.collectionName, models));
			return (body.id ? body: body.results);
		});

};

// Picks up any changes to the data cache store and syncs it back to the server.
export const saveChangesMiddleware = store => next => action => {

	// only pick up changes to the store if the action is an insert or the sync in payload is a truthy value
	if ( [INSERT, UPDATE, DESTROY].indexOf(action.type) < 0 || !action.payload.sync ) {
		return next(action);
	}

	next(action);

	let params = {
		url : 'http://52.62.76.183:4001/api' + schema[action.payload.collectionName].endpoint
	};

	switch (action.type) {
		case INSERT:
			params.method = 'POST';
			params.data = action.payload.record
			break
		case UPDATE:
			params.method = 'PUT';
			params.data = action.payload.record
			params.url += action.payload.id;
			break
		case DESTROY:
			params.method = 'DELETE';
			params.url += action.payload.id;
			break
	}

	// dispatch the fetch call and return the defferred promise to the dispatch function
	return store.dispatch(callAPI(params))
		.then(response => {

			let models, body;

			body = response.body;
			models = body.id ? [body] : ( _.isArray(body) ? body : body.results);

			if ([INSERT, UPDATE].indexOf(action.type) >= 0) {
				store.dispatch(setResponse(action.payload.collectionName, models));
			} else if (action.type === DESTROY) {
				store.dispatch(destory(action.payload.collectionName, response.body.id, false))
			}

			return response.body;

		});

};


/*----------------------------------------------------------
	Selectors
----------------------------------------------------------*/

// Select data
const selectData = createSelector(selectPath('DATA'));

// do some trickery to add each model to the select function as a method. So this is a function you can pass to createSelectors: `selectData.rows`
Object.keys(schema).forEach((model) => {
	selectData[model] = createSelector(selectData, selectPath(model));
});

export { selectData };


/*----------------------------------------------------------
	Lib
----------------------------------------------------------*/

// takes a plain object record and validates it against the schema
function validate(collectionName, record) {
	// let error, schema = data_config.validationSchema[collectionName];
	// joi.validate(record, schema, (err, value) => {
	// 	if (err) { error = err; }
	// });
	// return (error ? error : true);
	return true;
}