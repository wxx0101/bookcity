// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Plugin from "./plugins"
import "./fonts/iconfont.css"
import axios from  "axios"
const vueLazyload = require("vue-lazyload")


Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.use(Plugin)
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Plugin,
  components: { App },
  template: '<App/>'
})
Vue.use(vueLazyload,{
  preload:1.3,
  loading:require("./assets/timg.gif"),
  attempt:3
})