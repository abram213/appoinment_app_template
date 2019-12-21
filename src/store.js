import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import storage from './storage.js'
import auth from './modules/auth'

Vue.use(Vuex)

axios.defaults.baseURL = `${storage.host}`

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
