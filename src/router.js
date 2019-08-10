import Vue from 'vue'
import Router from 'vue-router'

import MainView from './components/MainView'

// * Use store for authentication check
// import { store } from './store/store.js'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: MainView}
  ]
})
