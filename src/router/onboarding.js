import Register from '../views/onboarding/Register'
import RegisterInvite from '../views/onboarding/RegisterInvite'
import InviteLogin from '../views/onboarding/InviteLogin'
import InviteAccept from '../views/onboarding/InviteAccept'
import Import from '../views/onboarding/Import'
import ManuallyImport from '../views/onboarding/ManuallyImport'
import ImportWait from '../views/onboarding/ImportWait'
import ImportFinish from '../views/onboarding/ImportFinish'
import Payment from '../views/onboarding/Payment'
import PaymentThanks from '../views/onboarding/PaymentThanks'
import Plan from '../views/onboarding/Plan'

export default [
  {
    path: '/onboard/register',
    name: 'register',
    component: Register,
    title: 'Register',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/onboard/invite/:token/register',
    name: 'inviteRegister',
    component: RegisterInvite,
    title: 'Register Invite',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/onboard/invite/:token/accept',
    name: 'inviteAccept',
    component: InviteAccept,
    title: 'Register Invite',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/onboard/invite/:token/login',
    name: 'inviteLogin',
    component: InviteLogin,
    title: 'Register Invite',
    meta: {
      isUnguarded: true,
    },
  },
  {
    path: '/onboard/import',
    name: 'Import',
    component: Import,
    title: 'Import',
  },
  {
    path: '/onboard/manuallyImport',
    name: 'ManuallyImport',
    component: ManuallyImport,
    title: 'ManuallyImport',
  },
  {
    path: '/onboard/importWait',
    name: 'ImportWait',
    component: ImportWait,
    title: 'ImportWait',
  },
  {
    path: '/onboard/importFinish',
    name: 'ImportFinish',
    component: ImportFinish,
    title: 'ImportFinish',
  },
  {
    path: '/onboard/payment',
    name: 'Payment',
    component: Payment,
    title: 'Payment',
  },
  {
    path: '/onboard/paymentThanks',
    name: 'PaymentThanks',
    component: PaymentThanks,
    title: 'PaymentThanks',
  },
  {
    path: '/onboard/plan',
    name: 'Plan',
    component: Plan,
    title: 'Plan',
  },
]
