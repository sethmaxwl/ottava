<template lang="pug">
  v-navigation-drawer#nav-settings(v-model='navigationDrawer', absolute='',
    dark='', :hide-overlay='true', :permanant='true', :right='true')
    v-list.py-0(dense='', nav='')
      v-list-item(two-line='')
        h3.sidetext Octave {{ this.keyboardSettings.octave }}
      v-list-item(two-line='')
        v-select(v-model='keyboardSettings.oscillatorType', :items='oscillatorTypes', label='Oscillator Type')
      v-list-item(two-line='')
        v-select(v-model='keyboardSettings.waveType', :items='waveTypes', label='Wave Type')
      v-list-item(two-line='')
        v-select(v-model='keyboardSettings.frequency', :items='frequencies', label='Frequency')
</template>

<script>
  export default {
    name: 'MakerSettingsSidebar',
    data () {
      return {
        keyboardSettings: {
          octave: this.$store.state.MakerKeyboard.octave,
          oscillatorType: this.$store.state.MakerKeyboard.oscillatorType,
          noteLength: this.$store.state.MakerKeyboard.noteLength,
          frequency: this.$store.state.MakerKeyboard.frequency,
          waveType: this.$store.state.MakerKeyboard.waveType
        },
        navigationDrawer: true,
        oscillatorTypes: [
          { text: 'None', value: '' },
          { text: 'FM', value: 'fm' },
          { text: 'AM', value: 'am' },
          { text: 'Fat', value: 'fat' }
        ],
        waveTypes: [
          { text: 'Sine', value: 'sine' },
          { text: 'Square', value: 'square' },
          { text: 'Sawtooth', value: 'sawtooth' },
          { text: 'Triangle', value: 'triangle' }
        ],
        frequencies: [
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
          { text: '4', value: 4 },
          { text: '5', value: 5 },
          { text: '6', value: 6 },
          { text: '7', value: 7 },
          { text: '8', value: 8 },
          { text: '9', value: 9 }
        ]
      }
    },
    methods: {
      addOctave: function () {
        this.$store.dispatch('')
      }
    }
  }
</script>

<style lang="scss">
#nav-settings {
  width: 25% !important;
  transform: translate(0%) !important;
}

.v-select .dropdown-menu {
  display: grid;
}

.sidetext {
  color: #ffffff;
}

@media screen and (max-width: 1100px) {
  #nav-settings {
    margin-top: 56px;
  }
}

@media screen and (min-width: 1101px) {
  #nav-settings {
    margin-top: 0;
  }
}
</style>