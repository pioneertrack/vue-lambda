'use strict'
const git = require('git-rev-sync');

module.exports = {
  NODE_ENV: '"staging"',
  GA_ID:'"UA-111612913-3"',
  VERSION: '"' + git.short() + '"',
  API_ENDPOINT:'"https://api.staging.weathercheck.co"',
  DOMAIN:'"api.staging.weathercheck.co"',
  COGNITO_REGION: '"us-east-1"',
  COGNITO_USERPOOLID: '"us-east-1_5pGfdfJl2"',
  COGNITO_CLIENTID: '"4sm7eloi2h1vctbl9kt9iaunja"',
  COGNITO_IDENTITYPOOLID: '"us-east-1:247ccaf8-116f-4bba-b77c-cbdafa451ac5"',
  SS_AUTHID:'"6413738716745430"',
  SENTRY_URL:'"https://c6716aef4210458b987ad55134538c2c@sentry.io/736144"',
}
