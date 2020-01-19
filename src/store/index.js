import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    namespaced: true,
    user
  }
})
