import api from '../../../api'
import {errorToast, successToast} from '../../../core/Toast'
import {toUpper} from 'vue-resource/src/util'

export default {
  login: function ({commit}, UserData) {
    return new Promise((resolve, reject) => {
      api.request('post', '/login', {
        'email': UserData.email,
        'password': UserData.password
      })
        .then(response => {
          let data = response.data
          var token = 'Bearer ' + data.token
          commit('SET_USER', data.user)
          commit('SET_TOKEN', token)
          if (window.localStorage) {
            window.localStorage.setItem('user', JSON.stringify(data.user))
            window.localStorage.setItem('token', token)
          }
          successToast('Welcome ' + toUpper(data.user.name))
          resolve(response)
        })
        .catch(error => {
          errorToast(error)
          reject(error)
        })
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
  // getRolesById: function ({commit, id}) {
  //   api.request('get', 'role:id', {id})
  //     .then(response => {
  //       commit('SET_ROLE_BY_ID', response.data)
  //     }).catch(error => {
  //       commonErrorToast(error)
  //     })
  // },
  addRoleWithPermission: function ({commit}, formData) {
    return new Promise((resolve, reject) => {
      api.request('post', '/roles', {
        'name': formData.name,
        'guard_name': formData.guard_name,
        'permissions': formData.permissions
      })
        .then(response => {
          resolve(response)
          successToast(response.data.message)
        })
        .catch(error => {
          reject(error)
          console.log(error)
          errorToast(error)
        })
    })
  },
  getPermissions: function ({commit}) {
    return new Promise((resolve, reject) => {
      api.request('get', '/permissions')
        .then(response => {
          commit('SET_PERMISSIONS', response.data.data.data)
        })
        .catch(error => {
          errorToast(error)
        })
    })
  },
  userInfo: function ({commit}) {
    api.request('get', '/user')
      .then(response => {
        console.log(response)
        commit('SET_USER', response.data.user)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
