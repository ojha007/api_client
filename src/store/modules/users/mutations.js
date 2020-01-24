export default {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  },
  SET_ROLE_BY_ID(state, role) {
    state.role = role
  },
  GET_PERMISSIONS(state, permissions) {
    state.permissions = permissions
  },
  SET_PERMISSIONS(state, permissions) {
    state.permissions = permissions
  }
}
