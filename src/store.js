import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import storage from './storage.js'
import auth from './modules/auth'

Vue.use(Vuex)

axios.defaults.baseURL = `${storage.host}`

export default new Vuex.Store({
  state: {
    approvedMeetings: null,
    unconfirmedMeetings: null,
    appointmentMeetings: null
  },
  mutations: {
    GET_APPROVED_MEETINGS: (state, approvedMeetings) => {
      state.approvedMeetings = approvedMeetings
    },
    GET_UNCONFIRMED_MEETINGS: (state, unconfirmedMeetings) => {
      state.unconfirmedMeetings = unconfirmedMeetings
    },
    GET_APPOINTMENT_MEETINGS: (state, appointmentMeetings) => {
      state.appointmentMeetings = appointmentMeetings
    }
  },
  actions: {
    getApprovedMeetings ({ commit }) {
      let meetings = [
        { id: 1, title: 'Договориться о сотрудничестве', person: 'Иванов Иван', company: 'Yandex', time: '13:30', date: '13 января 2019', place: 'Санкт-Петербург', approved: true, expired: false },
        { id: 2, title: 'Наладить общение', person: 'Иванов Петр', company: 'Mail', time: '14:30', date: '13 января 2019', place: 'Санкт-Петербург', approved: true, expired: false },
        { id: 3, title: 'Договориться о поставке товара', person: 'Абрамович Михаил', company: 'Rambler', time: '16:00', date: '12 января 2019', place: 'Санкт-Петербург', approved: true, expired: true }
      ]
      commit('GET_APPROVED_MEETINGS', meetings)
    },
    getUnconfirmedMeetings ({ commit }) {
      let meetings = [
        { id: 4, title: 'Договориться о поставке товара', person: 'Абрамович Михаил', company: 'Rambler', time: '16:00', date: '13 января 2019', place: 'Санкт-Петербург', approved: false, expired: false },
        { id: 5, title: 'Составить акт о доставке', person: 'Николаенко Николай', company: 'Nginx', time: '17:30', date: '13 января 2019', place: 'Санкт-Петербург', approved: false, expired: false },
        { id: 6, title: 'Договориться о сотрудничестве', person: 'Иванов Егор', company: 'Apple', time: '19:00', date: '13 января 2019', place: 'Санкт-Петербург', approved: false, expired: false }
      ]
      commit('GET_UNCONFIRMED_MEETINGS', meetings)
    },
    getAppointmentMeetings ({ commit }) {
      let meetings = [
        { id: 7, title: 'Договориться о сотрудничестве', person: 'Гурбатов Петр', company: 'Uber', time: '12:30', date: '13 января 2019', place: 'Санкт-Петербург', approved: false, expired: false },
        { id: 8, title: 'Договориться о сотрудничестве', person: 'Замулин Алексей', company: 'Microsoft', time: '14:00', date: '13 января 2019', place: 'Санкт-Петербург', approved: false, expired: false }
      ]
      commit('GET_APPOINTMENT_MEETINGS', meetings)
    }
  },
  modules: {
    auth
  }
})
