import Vue from 'vue'
import Vuex from 'vuex'

import { MakerKeyboard } from '@/store/maker-keyboard'
import { auth } from '@/store/auth'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    MakerKeyboard,
    auth
  },
  plugins: [createPersistedState({
    paths: ['auth']
  })]
})
