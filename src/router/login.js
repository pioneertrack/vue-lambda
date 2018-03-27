import Login from '../views/login/Login'
import Logout from '../views/login/Logout'
import ForgotPassword from '../views/login/ForgotPassword'
import ForgotThanks from '../views/login/ForgotThanks'
import ResetPassword from '../views/login/ResetPassword'
import ResetThanks from '../views/login/ResetThanks'

export default [
  {
    path: '',
    alias: '/login',
    name: 'login',
    component: Login,
    title: 'Login',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    title: 'Logout',
  },
  {
    path: '/forgotpassword',
    name: 'forgotPassword',
    component: ForgotPassword,
    title: 'ForgotPassword',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/resetpassword',
    name: 'resetPassword',
    component: ResetPassword,
    title: 'ResetPassword',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/resetThanks',
    name: 'resetThanks',
    component: ResetThanks,
    title: 'ResetThanks',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/forgotthanks',
    name: 'forgotThanks',
    component: ForgotThanks,
    title: 'ForgotThanks',
    meta: {
      isUnguarded: true,
    },
  },
]
