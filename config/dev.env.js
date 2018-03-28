'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  COGNITO_REGION: '"us-east-1"',
  COGNITO_USERPOOLID: '"us-east-1_5pGfdfJl2"',
  DOMAIN:'"localhost"',
  COGNITO_CLIENTID: '"4sm7eloi2h1vctbl9kt9iaunja"',
  COGNITO_IDENTITYPOOLID: '"us-east-1:247ccaf8-116f-4bba-b77c-cbdafa451ac5"',
  API_ENDPOINT:'"http://localhost:3000"',
  SS_AUTHID:'"6413736506203855"',
  SENTRY_URL:'"https://c6716aef4210458b987ad55134538c2c@sentry.io/736144"',
})
