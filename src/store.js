import Vue from 'vue'
import Vuex from 'vuex'

import { MakerKeyboard } from '@/store/maker-keyboard'
import { Alert } from '@/store/alert'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    MakerKeyboard,
    Alert
  },
  state: {

  },
  actions:{

  },
  mutations: {

  }
})
