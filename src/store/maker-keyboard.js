const state = {
  noteLength: 1,
  octave: 4,
  oscillatorType: '',
  frequency: 1,
  waveType: 'sine'
}

const mutations = {
  setNoteLength: function (state, data) {
    state.noteLength = data
  },
  setOctave: function (state, data) {
    state.octave = data
  },
  setOscillatorType: function (state, data) {
    state.oscillatorType = data
  },
  setFrequency: function (state, data) {
    state.frequency = data
  },
  setWaveType: function (state, data) {
    state.waveType = data
  }
}

const getters = {
  noteLength: function (state) {
    return state.noteLength
  },
  octave: function (state) {
    return state.octave
  },
  oscillatorType: function (state) {
    return state.oscillatorType
  },
  frequency: function (state) {
    return state.frequency
  },
  waveType: function (state) {
    return state.waveType
  }
}

export const MakerKeyboard = {
  namespaced: true,
  state,
  getters,
  mutations
}

