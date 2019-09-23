import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import('./views/Certificates.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/Contacts.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('./views/Posts.vue')
    },
    {
      path: '*',
      name: 'page404',
      component: () => import('./views/404.vue')
    }
  ]
})
