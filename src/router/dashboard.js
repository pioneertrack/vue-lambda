import Dashboard from '../views/dashboard/Dashboard'
import List from '../views/dashboard/List'
import MapPage from '../views/dashboard/map/MapPage'
import DataAudit from '../views/dashboard/DataAudit'
import PropertyPage from '../views/dashboard/PropertyPage'
import PropertiesListPage from '../views/dashboard/PropertiesListPage'
import EventNotificationPage from '../views/dashboard/EventNotificationPage'

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
    },
    children: [
      {
        path: '/dashboard/list',
        name: 'dashboard-list',
        component: List,
      },
    ],
  },
  {
    path: '/dashboard/data-audit/:teamId',
    name: 'dashboard-data-audit',
    component: DataAudit,
    title: 'Dashboard',
    props: true,
    meta: {
      isUnguarded: true,
      hideSideMenu: true,
    },
  },
  {
    path: '/dashboard/data-audit',
    name: 'dashboard-data-audit',
    component: DataAudit,
    title: 'Dashboard',
  },
  {
    path: '/dashboard/property/:id',
    name: 'dashboard-property-page',
    component: PropertyPage,
  },
  {
    path: '/dashboard/properties',
    name: 'dashboard-properties-list',
    component: PropertiesListPage,
  },
  {
    path: '/dashboard/notifications',
    name: 'dashboard-event-notifications',
    component: EventNotificationPage,
  },
  {
    path: '/dashboard/map',
    name: 'dashboard-map',
    component: MapPage,
  },
]
