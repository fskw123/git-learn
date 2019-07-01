import Vue from 'vue'

import App from './components/App.vue'

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from  './router.js'

import axios from 'axios'
// 把 axios 挂载到 Vue的 原型对象上
Vue.prototype.$http = axios.create({
    baseURL: 'http://www.liulongbin.top:3005'
})

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router,
})


