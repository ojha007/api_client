import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import NotFoundView from './components/404'
import permissions from './routes/permission'
import Role from './components/views/Role/Role'
import CreateRole from './components/views/Role/AddRole'
import Index from './components/views/Product/Index'
import Create from './components/views/Product/Create'

const otherRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {
          requiresAuth: true
        }
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {
          requiresAuth: true
        }
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/role',
        component: Role,
        name: 'Role',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/create/role',
        alias: 'Create_Role',
        component: CreateRole,
        name: 'Create Role',
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/products',
        name: 'Product',
        alias: 'Product',
        component: Index,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/products/create',
        name: 'Product_Create',
        alias: 'Product Create',
        component: Create,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]
var routes = []
routes = routes.concat(permissions, otherRoutes)
export default routes
