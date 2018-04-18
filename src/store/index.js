import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import cognitoConfig from '../config/cognito'
import CognitoAuth from '../auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [ createPersistedState({
    paths: [
      'team',
      'superUserEnabled',
    ],
  }), ],
  modules: {
    cognito: new CognitoAuth(cognitoConfig),
  },
  state: {
    team: {},
    superUserEnabled: false,
  },
  actions: {
    ADD_ADDRESS: function ({ commit, }, newAddress) {
      let setNew = {
        address: newAddress,
        status: false,
      }
      commit('ADD_ADDRESS_MUTATION', setNew)
    },
    RETRIEVE_TEAM: function (context) {
      return new Promise((resolve, reject) => {
        if (context.state.team.id && context.getters.isUserInGroup('WCAdmin') && context.state.superUserEnabled) {
          resolve(context.state.team)
        } else {
          axios.get(process.env.API_ENDPOINT + '/team/' + context.state.cognito.user.username + '/team/')
            .then(response => {
              context.commit('SET_TEAM', response.data)
              resolve(context.state.team)
            })
        }
      })
    },
    TOGGLE_SUPERUSER: function ({ commit, state, }) {
      commit('SET_SUPERUSER', !state.superUserEnabled)
    },
  },
  getters: {
    isUserInGroup: (state) => (group) => {
      if (typeof state.cognito === 'undefined' || state.cognito == null) {
        return false
      }
      if (typeof state.cognito.user === 'undefined' || state.cognito.user == null) {
        return false
      }
      if (typeof state.cognito.user.groups === 'undefined' || state.cognito.user.groups == null) {
        return false
      }
      return state.cognito.user.groups.indexOf(group) !== -1
    },
  },
  mutations: {
    ADD_ADDRESS_MUTATION: function (state, newAddress) {
      state.address = newAddress
    },
    SET_TEAM: function (state, team) {
      state.team = team
      // localStorage.setItem('wc-team', JSON.stringify(team))
    },
    SET_SUPERUSER: function (state, value) {
      state.superUserEnabled = value
    },
  },
})
