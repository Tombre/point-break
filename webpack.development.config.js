/*----------------------------------------------------------
Settings
----------------------------------------------------------*/

// Main
var webpack = require("webpack");
var path = require('path');

/*----------------------------------------------------------
Setup
----------------------------------------------------------*/

module.exports = {

  // // Create Sourcemaps for the bundle
  devtool: 'cheap-module-source-map',

	entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
		'app/index',
	],

	output: {
		path: path.join(__dirname, 'build'),
		filename: "[name].js"
	},

	module: {
		preLoaders: [
			{
        test: /\.jsx$/,
        exclude: /(node_modules|vendor)/,
        loader: "eslint-loader"
      },
			{
        test: /\.js$/,
        exclude: /(node_modules|vendor)/,
        loader: "eslint-loader"
      }
		],
		loaders: [
			{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|vendor)/
      }
		]
	},

	eslint: {
    quiet: false
  },

	resolve: {
		root: [
			path.join(__dirname, 'src'),
		],
		extensions: ['', '.js', '.html', '.jsx']
	},

	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"DEVELOPMENT"'
			}
		}),
		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin(),
	],

	stats: {
		// Nice colored output
		colors: true
	}

};
