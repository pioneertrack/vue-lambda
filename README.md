# weathercheck

> WeatherCheck Application

## Build Setup

``` bash

# install npm
https://docs.npmjs.com/cli/install

# install npx globally 

npm install -g npx

# install dependencies
npm install

# install lambda functions
npm run functions:init

# serve frontend with hot reload at localhost:8080
npm run dev

# serve with serverless function and api localhost:3000
sls offline start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Add SubModule
from the main directory of the applcation run the following commands and
replace your-repo with the name of your repo
``` bash
1.) git submodule add git@bitbucket.org:weathercheckco/your-repo.git functions/your-repo

2.) npm run functions:build 
* this functions:build rebuild the serverless.yml for local development, 
serverless offline must be restarted for changes to take effect

*** 
git submodule update --init --recursive 
git submodule foreach --recursive git submodule update --init
***
```

## Gotcha
env variable need an extra Apostrophe around them 
'"https://api.staging.weathercheck.co/"'

## Debugging
To debug lambda functions run the below command from the functions directory

`node --inspect node_modules\serverless\bin\serverless offline start` 
