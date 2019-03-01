import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import './global-components'

import AppLayout from './components/AppLayout'

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
