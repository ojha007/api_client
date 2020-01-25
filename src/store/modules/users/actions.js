import api from '../../../api'
import {errorToast, successToast} from '../../../core/Toast'
import routes from '../../../routes'

export default {
  login: function (email, password) {
    api.request('post', '/login',
      {email, password})
      .then(response => {
        let data = response.data
        if (data.user) {
          var token = 'Bearer ' + data.token
          this.$store.user.commit('SET_USER', data.user)
          this.$store.user.commit('SET_TOKEN', token)
          if (window.localStorage) {
            window.localStorage.setItem('user', JSON.stringify(data.user))
            window.localStorage.setItem('token', token)
          }
          this.$router.push(data.redirect ? data.redirect : '/')
          successToast('Welcome' + data.user.name)
        }
      })
      .catch(error => {
        CommonErrorToast(error)
      })
  },
  getAllRoles: function ({commit}) {
    api.request('get', '/roles', null)
      .then(response => {
        commit('SET_ROLES', response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getRolesById: function ({commit, id}) {
    api.request('get', 'role:id', {id})
      .then(response => {
        commit('SET_ROLE_BY_ID', response.data)
      }).catch(error => {
        CommonErrorToast(error)
      })
  },
  addRoleWithPermission: function ({commit}, formData) {
    return new Promise((resolve, reject) => {
      api.request('post', '/roles', {
        'name': formData.name,
        'guard_name': formData.guard_name,
        'permissions': formData.permissions
      })
        .then(response => {
          resolve(response)
          if (response.status === 200) {
            console.log(routes)
            routes.push({path: '/role'})
          }
          successToast(response.data.message)
        })
        .catch(error => {
          reject(error)
          console.log(error)
          CommonErrorToast(error)
        })
    })
  },
  getPermissions: function ({commit}) {
    api.request('get', '/permissions')
      .then(response => {
        commit('SET_PERMISSIONS', response.data.data.data)
      })
      .catch(error => {
        CommonErrorToast(error)
      })
  }
}
function CommonErrorToast(error) {
  let errors = Object.values(error.response.data.errors)
  for (let i = 0; i <= errors.length - 1; i++) {
    errorToast(errors[i][0])
  }
}
