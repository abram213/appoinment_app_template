import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/CompaniesAndMembers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'companies',
      component: Home
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('./views/Company.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('./views/Member.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('./views/Favorite.vue')
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: () => import('./views/Meetings.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    }
  ]
})
