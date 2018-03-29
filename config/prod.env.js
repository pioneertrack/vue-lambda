'use strict'
const git = require('git-rev-sync');

module.exports = {
  NODE_ENV: '"production"',
  GA_ID:'"UA-111612913-2"',
  VERSION:git.short(),
  API_ENDPOINT:'"https://api.app.weathercheck.co"',
  DOMAIN:'"app.weathercheck.co"',
  COGNITO_REGION: '"us-east-2"',
  COGNITO_USERPOOLID: '"us-east-2_ZncmElBRt"',
  COGNITO_CLIENTID: '"rapb4b90d5tfjst0f9i56569d"',
  COGNITO_IDENTITYPOOLID: '"us-east-2:97392044-5732-43f3-aac1-348a9574cb40"',
  SS_AUTHID:'"6413738716745430"',
  SENTRY_URL:'"https://c6716aef4210458b987ad55134538c2c@sentry.io/736144"',
}
