import Vue from 'vue'
import Vuex from 'vuex'

import { MakerKeyboard } from '@/store/maker-keyboard'
import { auth } from '@/store/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    MakerKeyboard,
    auth
  }
})
