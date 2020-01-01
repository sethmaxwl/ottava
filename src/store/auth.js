const state = {
  user: {}
}

const mutations = {
  loadUser: (state, data) => {
    state.user = JSON.parse(JSON.stringify(data))
  }
}

const getters = {
  user: (state) => {
    state.user
  }
}

const actions = {
  login: ({ commit }, data) => {
    commit('loadUser', data)
  },
  logout: ({ commit }) => {
    commit('loadUser', {})
  }
}

export const auth = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}