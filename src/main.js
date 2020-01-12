import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FirebaseConfiguration from './firebaseConfig.js'

import vuetify from './plugins/vuetify'
import VuePageTransition from 'vue-page-transition'

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
import { 
  library as FontAwesomeLibrary,
  dom as FontAwesomeDom
} from '@fortawesome/fontawesome-svg-core'
import {
  faMusic,
  faHome,
  faBars,
  faUserEdit,
  faCompactDisc,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import {
  faUser
} from '@fortawesome/free-regular-svg-icons'
FontAwesomeLibrary.add(
  faMusic,
  faHome,
  faBars,
  faUser,
  faUserEdit,
  faCompactDisc,
  faStar
)
FontAwesomeDom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
Vue.use(VuePageTransition)

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  FirebaseConfiguration,
  render: h => h(App)
})
