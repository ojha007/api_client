import api from '../../../api'
import Vue from 'vue'
import {errorToast, successToast} from '../../../core/Toast'

export default {
  login: function (email, password) {
    // this.toggleLoading()
    // this.resetResponse()
    // this.$store.commit('TOGGLE_LOADING')
    api.request('post', '/login', {email, password})
      .then(response => {
        // this.toggleLoading()
        // console.log(response.errors)
        var data = response.data
        if (data.error) {
          var errorName = data.error.name
          if (errorName) {
            this.response =
              errorName === 'InvalidCredentialsError'
                ? 'Username/Password incorrect. Please try again.'
                : errorName
          } else {
            this.response = response
          }
          return
        }
        if (data.user) {
          var token = 'Bearer ' + data.token
          // this.$store.users.commit('SET_USER', data.users)
          // this.$store.users.commit('SET_TOKEN', token)
          if (window.localStorage) {
            window.localStorage.setItem('user', JSON.stringify(data.user))
            window.localStorage.setItem('token', token)
          }
          this.$router.push(data.redirect ? data.redirect : '/')
        }
      })
      .catch(error => {
        // this.$store.commit('TOGGLE_LOADING')
        console.log(error)
        this.response = 'Server appears to be offline'
        // this.toggleLoading()
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
  getRolesById({commit, id}) {
    api.request('get', 'role:id', {id})
      .then(response => {
        commit('SET_ROLE_BY_ID', response.data)
      }).catch(error => {
        console.log(error)
      })
  },
  addRoleWithPermission: function ({commit}, formData) {
    console.log(formData)
    api.request('post', '/roles', {
      'name': formData.name,
      'guard_name': formData.guard_name
    })
      .then(response => {
        this.$router.push('/role')
        successToast(response.data.message)
      })
      .catch(error => {
        let errors = Object.values(error.response.data.errors)
        for (let i = 0; i <= errors.length - 1; i++) {
          errorToast(errors[i][0])
        }
      })
  }
}
