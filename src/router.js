import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/components/Landing'
import Maker from '@/components/Maker'

// * Use store for authentication check
// import { store } from './store/store.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Landing },
    { path: '/music-maker', component: Maker },
    { path: '/*', redirect: '/' }
  ]
})
