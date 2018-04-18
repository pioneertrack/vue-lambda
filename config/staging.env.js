'use strict'
const git = require('git-rev-sync');

module.exports = {
  NODE_ENV: '"staging"',
  GA_ID:'"UA-111612913-3"',
  VERSION: '"' + git.short() + '"',
  API_ENDPOINT:'"https://api.staging.weathercheck.co"',
  DOMAIN:'"staging.weathercheck.co"',
  COGNITO_REGION: '"us-east-2"',
  COGNITO_USERPOOLID: '"us-east-2_lXDCGDxaX"',
  COGNITO_CLIENTID: '"1rs811vtv24u85k7pjdot4clk1"',
  COGNITO_IDENTITYPOOLID: '"us-east-2:3204ea71-908a-499f-b91d-7725c0ae3064"',
  SS_AUTHID:'"6413738716745430"',
  SENTRY_URL:'"https://c6716aef4210458b987ad55134538c2c@sentry.io/736144"',
}
