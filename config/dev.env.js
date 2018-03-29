'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const git = require('git-rev-sync');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GA_ID:'"UA-111612913-3"',
  VERSION: '"' + git.short() + '"',
  COGNITO_REGION: '"us-east-2"',
  COGNITO_USERPOOLID: '"us-east-2_lXDCGDxaX"',
  DOMAIN:'"localhost"',
  COGNITO_CLIENTID: '"1rs811vtv24u85k7pjdot4clk1"',
  COGNITO_IDENTITYPOOLID: '"us-east-2:3204ea71-908a-499f-b91d-7725c0ae3064"',
  API_ENDPOINT:'"http://localhost:3000"',
  SS_AUTHID:'"6413736506203855"',
  SENTRY_URL:'"https://c6716aef4210458b987ad55134538c2c@sentry.io/736144"',
})
