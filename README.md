# Culture Counts #

### Install ###

    # run make
    make

### Configure your email settings ###

Create a file `culturecounts-api/server/PVMF/settings_local.py` containing the following settings:

    EMAIL_HOST = "smtp.gmail.com"
    EMAIL_HOST_USER = "GMAIL-USERNAME"
    EMAIL_HOST_PASSWORD = "GMAIL-PASSWORD"
    EMAIL_USE_TLS = True
    EMAIL_PORT = 587
    
    DEBUG = True

You can also use different email settings - whatever you enter above will cause Django to send email through the host you specify.

### Run

Run everything:

    ./bin/cc-dev.sh
    # then browse to http://localhost:8000/

This runs the local socket.io proxy server, the Django API server, and gulp to monitor and build static frontend files in dev mode.

### Database

Install postgresql (Debian/Ubuntu):

    sudo apt-get install postgresql postgresql-contrib
    sudo apt-get install libpq-dev

Install postgresql (OSX):

    brew install postgresql

Run postgresql (OSX)

    postgres -D /usr/local/var/postgres

Create a postgres user (OSX)

    psql

    --OR--

    createuser -s postgres

Create yourself a postgres user:

    sudo -u postgres createuser `whoami`

Fetch the data from the dev server:

    cd culturecounts-api && ./bin/fetch-data.sh dev

If you ever need to delete the database completely:

    dropdb culturecounts

### Creating a superuser ###

    cd culturecounts-api
    . ./virtualenv/bin/activate     #  <- get into python environment
    ./server/manage.py createsuperuser

To give the user the "Admin" role to access to the dashboard:

 * Log into the Django admin at /admin/
 * Find the user you created.
 * Add them to the group "Admin" and save.

### Live Build & Deploy

Static production build with gulp:

    ./node_modules/.bin/gulp build

We are running:

 * uwsgi from Debian stable
 * nginx 1.6.2 from Debian backports
 * supervisord from Debian stable

