import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/users'
import contactStore from './modules/contacts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    contactStore
  }
})
