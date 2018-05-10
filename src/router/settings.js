import UserProfile from '../views/settings/UserProfile'
import EditUserProfile from '../views/settings/EditUserProfile'
import ChangePassword from '../views/settings/ChangePassword'
import Settings from '../views/settings/Settings'
import ManageUsers from '../views/settings/ManageUsers'

export default [
  {
    path: '/settings',
    name: 'userProfile',
    component: Settings,
    title: 'UserProfile',
    children: [
      {
        path: '',
        name: 'userProfile',
        component: UserProfile,
        title: 'UserProfile',
      },
      {
        path: 'profile',
        name: 'userProfile',
        component: UserProfile,
        title: 'UserProfile',
      },
      {
        path: 'profile/edit',
        name: 'editUserProfile',
        component: EditUserProfile,
        title: 'EditUserProfile',
      },
      {
        path: 'profile/change-password',
        name: 'changePassword',
        component: ChangePassword,
        title: 'Change Password',
      },
      {
        path: 'manage-users',
        name: 'ManageUsers',
        component: ManageUsers,
        title: 'Manage Users',
      },
    ],
  },
]
