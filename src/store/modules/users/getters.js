export default {
  isLoggedIn(state) {
    return false
  },
  ROLES: state => {
    return state.roles
  },
  getRolesById(state) {
    return state.role
  },
  PERMISSIONS: state => state.permissions
}
