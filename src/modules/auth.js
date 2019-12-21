import Vue from 'vue'
import axios from 'axios'

export default {
  state: {
    authStatus: 'none',
    token: '',
    expiresIn: ''
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getAuthStatus: state => state.authStatus
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.authStatus = 'loading'
    },
    AUTH_SUCCESS: (state, token, expiresIn) => {
      state.authStatus = 'success'
      state.token = token
      state.expiresIn = expiresIn
    },
    AUTH_ERROR: (state) => {
      state.authStatus = 'error'
      state.token = ''
      state.expiresIn = ''
      Vue.cookie.delete('access_token')
      Vue.cookie.delete('expires_in')
      Vue.cookie.delete('refresh_token')
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        axios.post(`/auth/login`, JSON.stringify(data))
          .then(function (resp) {
            const accessToken = resp.data.tokens.access_token
            const expiresIn = resp.data.tokens.access_expires_in
            const refreshToken = resp.data.tokens.refresh_token
            Vue.cookie.set('access_token', accessToken)
            Vue.cookie.set('expires_in', expiresIn)
            Vue.cookie.set('refresh_token', refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
            commit('AUTH_SUCCESS', accessToken, expiresIn)
            resolve(resp)
          })
          .catch(err => {
            commit('AUTH_ERROR')
            reject(err)
          })
      })
    },
    regiter ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        axios.post(`/auth/register`, JSON.stringify(data))
          .then(function (resp) {
            const accessToken = resp.data.tokens.access_token
            const expiresIn = resp.data.tokens.access_expires_in
            const refreshToken = resp.data.tokens.refresh_token
            Vue.cookie.set('access_token', accessToken)
            Vue.cookie.set('expires_in', expiresIn)
            Vue.cookie.set('refresh_token', refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
            commit('AUTH_SUCCESS', accessToken, expiresIn)
            resolve(resp)
          })
          .catch(err => {
            commit('AUTH_ERROR')
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        Vue.cookie.delete('access_token')
        Vue.cookie.delete('expires_in')
        Vue.cookie.delete('refresh_token')
        delete axios.defaults.headers.common['Authorization']
        window.location.reload('/login')
      })
    }
  }
}
