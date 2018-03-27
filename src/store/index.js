import Vue from 'vue'
import Vuex from 'vuex'

import cognitoConfig from '../config/cognito'
import CognitoAuth from '../auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cognito: new CognitoAuth(cognitoConfig),
  },
  state: {
    address: null,
    teamId: null,
  },
  actions: {
    ADD_ADDRESS: function ({ commit, }, newAddress) {
      var setNew = {
        address: newAddress,
        status: false,
      }
      commit('ADD_ADDRESS_MUTATION', setNew)
    },
  },
  mutations: {
    ADD_ADDRESS_MUTATION: function (state, newAddress) {
      state.address = newAddress
    },
  },
})
