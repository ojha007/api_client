export default {
  isLoggedIn: state => {
    return !!state.token
  },
  ROLES: state => {
    return state.roles
  },
  getRolesById(state) {
    return state.role
  },
  PERMISSIONS: state => state.permissions
}
