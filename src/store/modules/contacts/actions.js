import api from '../../../api'
import {errorToast, successToast} from '../../../core/Toast'

const contacts = '/contacts'
export default {
  index() {
    return new Promise((resolve, reject) => {
      api.request('GET', contacts)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
          errorToast(error)
        })
    })
  },
  create({commit}, formData) {
    return new Promise((resolve, reject) => {
      api.request('POST', contacts, {
        'name': formData.name,
        'role': formData.role,
        'email': formData.email,
        'password': formData.password
      })
        .then(response => {
          resolve(response)
          commit('SET_CONTACTS', response.data.data)
          successToast(response.data.message)
        })
        .catch(error => {
          reject(error)
          errorToast(error)
        })
    })
  },
  edit({commit}, formData, id) {
    return new Promise((resolve, reject) => {
      api.request('PATCH', contacts`/${id}`, {})
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
