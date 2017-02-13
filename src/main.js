// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import filters from './filter/index.js'
import routesConfig from './router/index.js'
import {interceptRequest, interceptResponse} from './interceptors/index.js'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
const requests = Object.keys(interceptRequest)
requests.forEach((key, i) => {
  i < requests.length - 1 ? axios.interceptors.request.use(interceptRequest[key], interceptRequest[requests[requests.length - 1]]) : ''
})

const responses = Object.keys(interceptResponse)
responses.forEach((key, i) => {
  i < responses.length - 1 ? axios.interceptors.response.use(interceptResponse[key], interceptResponse[responses[responses.length - 1]]) : ''
})
/* eslint-disable no-new */
var router = new VueRouter({
  routes: routesConfig
})
router.beforeEach((to, from, next) => {
  window.location.pathname = '/?'
  console.log(to)
  next()
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.Vue = Vue
