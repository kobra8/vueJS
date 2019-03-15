import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router'
import state from './state'
import VueFetch, { $fetch } from './plugins/fetch'
import VueState from './plugins/state'
import './global-components'

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
})

Vue.use(VueState, state)

async function main() {
  try {
    state.user = await $fetch('user')
  } catch (error) {
    console.warn(error);
  }
}

new Vue({
  el: '#app',
  data: state,
  render: h => h(AppLayout),
  router
})

main()
