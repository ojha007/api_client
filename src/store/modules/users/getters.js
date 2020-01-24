export default {
  isLoggedIn(state) {
    return state.token !== null
  },
  ROLES: state => {
    return state.roles
  },
  getRolesById(state) {
    return state.role
  },
  PERMISSIONS: state => state.permissions
}
