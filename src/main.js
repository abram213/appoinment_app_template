import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import vuetify from './plugins/vuetify'

Vue.use(VueCookie)

Vue.config.productionTip = false

const accessToken = Vue.cookie.get('access_token')
const refreshToken = Vue.cookie.get('refresh_token')
const expiresIn = Vue.cookie.get('expires_in')
if (accessToken && expiresIn && refreshToken) {
  store.state.auth.token = accessToken
  store.state.auth.expiresIn = expiresIn
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
} else {
  Vue.cookie.delete('access_token')
  Vue.cookie.delete('expires_in')
  Vue.cookie.delete('refresh_token')
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
