const state = {
  msg: '',
  alertType: ''
}

export const Alert = {
  namespaced: true,
  name: 'alert',
  state: {
      message: '',
      alertType: ''
  },
  mutations: {
    setAlert(state, showAlert) {
      state = { ...showAlert }
    },
    resetState(state) {
      Object.assign(state.msg, '')
      Object.assign(state.alertType, '')
    }
  }
}