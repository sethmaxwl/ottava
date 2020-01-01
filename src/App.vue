<template lang='pug'>
  v-app#app
    Navbar.nav
    router-view.view
    Sidebar.side
</template>

<script>
import Sidebar from '@/components/navigation-components/Sidebar'
import Navbar from '@/components/navigation-components/Navbar'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss">
@import "@/styles/_vars.scss";
@import "@/styles/_global_styles.scss";

.view {
  margin-top: 0;
}

@media screen and (max-width: 1100px) {
  .nav {
    display: block !important;
  }
  .side {
    display: none !important;
  }
  .view {
    margin-top: 56px;
  }
}

@media screen and (min-width: 1101px) {
  .nav {
    display: none !important;
  }
  .side {
    display: block !important;
  }
}

#app {
  width: 100vw;
}
</style>