import 'es6-promise/auto'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VModal from 'vue-js-modal'
import {sync} from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import {count, domain, pluralize, prettyDate} from './filters'
import AppView from './components/App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import select2 from 'vue-select2'
// eslint-disable-next-line no-duplicate-imports
import VeeValidate, {Validator} from 'vee-validate'
import 'sweetalert2/dist/sweetalert2.min.css'
import Toasted from 'vue-toasted'
import PrettyCheckbox from 'pretty-checkbox-vue'
import 'material-design-icons/iconfont/material-icons.css'

Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)
Vue.use(VueRouter)
Vue.use(VModal)
Vue.use(select2)
Vue.use(VeeValidate)
Validator.extend('minLength', {
  getMessage(field, [length]) {
    return `At least ${length} items must be selected.`
  },
  validate(value, [length]) {
    return value.length >= length
  }
})

Vue.use(Toasted, {
  iconPack: 'material'
})

Vue.use(VueSweetalert2)

Vue.use(PrettyCheckbox)

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//     } else {
//       console.log('Not authenticated')
//       next('/login')
//     }
//   }
// })

sync(store, router)

if (window.localStorage) {
  var localUserString = window.localStorage.getItem('user') || 'null'
  var localUser = JSON.parse(localUserString)

  if (localUser && store.state.user !== localUser) {
    store.commit('SET_USER', localUser)
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})

