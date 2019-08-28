<template lang='pug'>
  div#app
    vue-page-transition(name='fade-in-left')
      router-view.view
    Sidebar
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@import "@/styles/_vars.scss";
@import "@/styles/_global_styles.scss";
.view {
  margin-left: $navbar-margin;
}

</style>