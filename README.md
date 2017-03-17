# FTSL
Website for the FTSL; built with KeystoneJS & VueJS.

## Work In Progress!

## Required:
- Have a recent (tested with v6.3.1) version of node installed
- Have a MongoDB running (tested with v3.2.11)

## Set env var:
- FTSL_ADMIN_PASSWORD (if you are setting up a new database)
- FTSL_COOKIE_SECRET (a long random string)
- FTSL_MONGO (mongo address, starting with mongodb://)

## Install with:
`npm install`

## Build client with (dev only):
`gulp`

## Run (inside /server) with:
`node server.js`
