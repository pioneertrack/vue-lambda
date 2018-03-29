import Vue from 'vue'
import KeenUI from 'keen-ui'
import App from './App'
import store from './store'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAnalytics from 'vue-ua'
import VueGtm from 'vue-gtm'
import VModal from 'vue-js-modal'
import axios from 'axios'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

function isDevelopment () {
  let isDevelopment = false
  if (process.env['NODE_ENV'] === 'development') {
    isDevelopment = true
  }
  return isDevelopment
}

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = 'Weathercheck - ' + to.meta.title
  } else {
    document.title = 'Weathercheck'
  }

  const isUnguarded = to.matched.some(routeInfo => routeInfo.meta.isUnguarded)
  if (isUnguarded || isDevelopment()) {
    next()
  } else {
    store.dispatch('getCurrentUser').then((user) => {
      if (store.state.teamId === null) {
        axios.get(process.env.API_ENDPOINT + '/team/' + store.state.cognito.user.username + '/team/')
          .then(response => {
            store.state.teamId = response.data.teamId
            next()
          })
      } else {
        next()
      }
    }).catch(() => {
      next('/login')
    })
  }
})

Raven
  .config(process.env.SENTRY_URL)
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false
Vue.use(router)
Vue.use(KeenUI)
Vue.use(VModal, { componentName: 'vue-modal', })

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB3Bn8IlEEEN20b67qnEfNKAU3tUsIVt8w',
    libraries: 'places,drawing,visualization',
  },
})
Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'weathercheck',
  // [Required] The version of your app.
  appVersion: '0.1',
  // [Required] Your Google Analytics tracking ID.
  trackingId: process.env.GA_ID,
  // If you're using vue-router, pass the router instance here.
  vueRouter: router,
})

Vue.use(VueGtm, {
  debug: false,
  vueRouter: router,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
