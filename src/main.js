// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routes from './routes.js'
import App from './App'

import PageContent from './components/PageContent'

Vue.component('page-content', PageContent)

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode: 'hash',
  base: window.location.pathname,
  routes
})

/* eslint-disable no-new */
let Pizzap = Vue.component('app', App)
let vm = new Pizzap({
  el: '#app',
  router
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content')

    if (mainContent) {
      mainContent.scrollTop = 0
    }

    vm.closeSidenav()

    next()
  })
})

