import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Landing from '@/components/pages/Landing'
import Maker from '@/components/pages/MakerPage'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Dashboard from '@/components/user-components/Dashboard'
import Settings from '@/components/user-components/Settings'

// * Use store for authentication check
// import { store } from './store/store.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/maker',
      name: 'Maker',
      component: Maker,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    { path: '/*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router