import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import storage from './storage.js'

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
        { id: 1, title: 'Agree on cooperation', person: 'Ivanov Ivan', company: 'Yandex', time: '13:30', date: '13 january 2019', place: 'Saint-Petersburg', approved: true, expired: false },
        { id: 2, title: 'Establish communication', person: 'Ivanov Ivan', company: 'Mail', time: '14:30', date: '13 january 2019', place: 'Saint-Petersburg', approved: true, expired: false },
        { id: 3, title: 'Agree on the delivery of goods', person: 'Ivanov Ivan', company: 'Rambler', time: '16:00', date: '12 january 2019', place: 'Saint-Petersburg', approved: true, expired: true }
      ]
      commit('GET_APPROVED_MEETINGS', meetings)
    },
    getUnconfirmedMeetings ({ commit }) {
      let meetings = [
        { id: 4, title: 'Agree on the delivery of goods', person: 'Ivanov Ivan', company: 'Rambler', time: '16:00', date: '13 january 2019', place: 'Saint-Petersburg', approved: false, expired: false },
        { id: 5, title: 'Draw up a delivery certificate', person: 'Ivanov Ivan', company: 'Nginx', time: '17:30', date: '13 january 2019', place: 'Saint-Petersburg', approved: false, expired: false },
        { id: 6, title: 'Agree on cooperation', person: 'Ivanov Ivan', company: 'Apple', time: '19:00', date: '13 january 2019', place: 'Saint-Petersburg', approved: false, expired: false }
      ]
      commit('GET_UNCONFIRMED_MEETINGS', meetings)
    },
    getAppointmentMeetings ({ commit }) {
      let meetings = [
        { id: 7, title: 'Agree on cooperation', person: 'Ivanov Ivan', company: 'Uber', time: '12:30', date: '13 january 2019', place: 'Saint-Petersburg', approved: false, expired: false },
        { id: 8, title: 'Agree on cooperation', person: 'Ivanov Ivan', company: 'Microsoft', time: '14:00', date: '13 january 2019', place: 'Saint-Petersburg', approved: false, expired: false }
      ]
      commit('GET_APPOINTMENT_MEETINGS', meetings)
    }
  }
})
