<template lang='pug'>
  VueElementLoading(:active='isLoading', :is-full-screen='false', text=message)
    SemipolarSpinner(:animation-duration='1000', :size='100', color='#db38ae')
</template>

<script>
  import VueElementLoading from 'vue-element-loading'
  import { SemipolarSpinner } from 'epic-spinners'

  export default {
    name: 'Loader',
    props: {
      isLoading: {
        type: Boolean,
        default: false,
        required: true
      },
      message: {
        type: String,
        default: '',
        required: false
      }
    },
    components: {
      VueElementLoading,
      SemipolarSpinner
    }
  }
</script>