import Vue from 'vue'
import Vuex from 'vuex'

import { MakerKeyboard } from '@/store/maker-keyboard'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    MakerKeyboard
  }
})
