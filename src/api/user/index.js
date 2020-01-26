import Api from '../index'
const user = '/user'
const role = '/role'
const permissions = '/permissions'
const UserRepository = {
  index() {
    Api.request('GET', `${user}`)
  },
  create() {
    Api.request('POST', `${user}`)
  },
  edit(id) {
    Api.request('PATCH', `${user}`, {id})
  },
  delete(id) {
    Api.request('DELETE', `${user}`, {id})
  }

}
const PermissionRepository = {
  index() {
    Api.request('GET', `${permissions}`)
  },
  create() {
    Api.request('POST', `${permissions}`)
  },
  edit(id) {
    Api.request('PATCH', `${permissions}`, {id})
  },
  delete(id) {
    Api.request('DELETE', `${permissions}`, {id})
  }
}
const RoleRepository = {
  index() {
    Api.request('GET', `${role}`)
  },
  create() {
    Api.request('POST', `${role}`)
  },
  edit(id) {
    Api.request('PATCH', `${role}`, {id})
  },
  delete(id) {
    Api.request('DELETE', `${role}`, {id})
  }
}

export {
  UserRepository,
  PermissionRepository,
  RoleRepository
}
