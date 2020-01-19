export default {
  isLoggedIn(state) {
    return state.token !== null
  },
  getRoles(state) {
    return state.roles
  },
  getRolesById(state) {
    return state.role
  }
}
