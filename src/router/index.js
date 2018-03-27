import Vue from 'vue'
import VueRouter from 'vue-router'
import Address from '../views/common/Address'
import dashboardRoutes from './dashboard'
import loginRoutes from './login'
import onboardingRoutes from './onboarding'
import propertyRoutes from './property'
import notfound from './notfound'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/single_check_address/',
    name: 'address',
    component: Address,
    title: 'Address',
    props: true,
    meta: {
      isUnguarded: false,
    },
  },
]

const routes = baseRoutes.concat(
  dashboardRoutes,
  loginRoutes,
  onboardingRoutes,
  propertyRoutes,
  notfound
)

export default new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
})
