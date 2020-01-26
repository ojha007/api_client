import Role from '../components/views/Permission/Role.vue'

const roles = [
  {
    path: 'role',
    component: Role,
    name: 'Role',
    meta: {
      requiresAuth: true
    }
  }
]
export default roles
