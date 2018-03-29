'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GA_ID:'"UA-111612913-3"',
  VERSION:git.short(),
  COGNITO_REGION: '"us-east-2"',
  COGNITO_USERPOOLID: '"us-east-2_LDRW5Y1Fp"',
  DOMAIN:'"localhost"',
  COGNITO_CLIENTID: '"6tcsoeeomh7ms71k657h3fh4qr"',
  COGNITO_IDENTITYPOOLID: '"us-east-2:138d3999-ac42-4521-935a-177fc622d382"',
  API_ENDPOINT:'"http://localhost:3000"',
  SS_AUTHID:'"6413736506203855"',
  SENTRY_URL:'"https://c6716aef4210458b987ad55134538c2c@sentry.io/736144"',
})
