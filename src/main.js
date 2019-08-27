import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify';

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
   faHome
 } from '@fortawesome/free-solid-svg-icons'

 FontAwesomeLibrary.add(
   faMusic,
   faHome
 )
 FontAwesomeDom.watch()
 Vue.component('font-awesome-icon', FontAwesomeIcon)
 Vue.component('font-awesome-layers', FontAwesomeLayers)
 Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
