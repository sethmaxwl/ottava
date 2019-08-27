<template lang='pug'>
  div#app
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

.view {
  margin-left: $navbar-margin;
}
</style>