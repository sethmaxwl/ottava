<template lang='pug'>
  div
    v-app-bar#navbar(:flat='true', :dark='true')
      v-img(src='@/assets/ottava-logo-full.svg', contain='', max-height='40', aspect-ratio='2.6')
      v-app-bar-nav-icon(@click.stop='drawerOpen = !drawerOpen')
    v-navigation-drawer#drawer(v-model='drawerOpen', right='', temporary='', app='', fixed='')
      v-list(nav='', dense='')
      v-list-item-group
        v-list-item(two-line='', @click="redirect('/')")
          v-list-item-title Home
        v-list-item(two-line='', @click="redirect('/maker')")
          v-list-item-title Music Maker
</template>

<script>
import router from '@/router'

export default {
  name: 'Navbar',
  data: () => ({
    drawerOpen: false
  }),
  methods: {
    redirect (route) {
      router.push(route)
    }
  }
}
</script>

<style lang="scss">
.v-image__image {
  background-position: 0 0 !important;
}

#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
}

#drawer {
  position: fixed;
  top: 0;
  width: 100%;
  overflow-y: scroll;
}
</style>