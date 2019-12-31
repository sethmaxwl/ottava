<template lang="pug">
  v-navigation-drawer#nav-drawer(v-model='navigationDrawer', :mini-variant='true', absolute='',
    dark='', :hide-overlay='true', :persistant='true', :permanant='true')
    v-list.py-0(dense='', nav='')
      v-list-item(two-line='')
        img#ottava-logo(src='@/assets/ottava-logo.svg')
      v-divider
      v-tooltip(right='')
        template(v-slot:activator='{ on }')
          v-list-item(two-line='', @click="redirect('/')", v-on='on')
            font-awesome-icon(:icon="['fas', 'home']", size='2x')
        span Home
      v-tooltip(right='')
        template(v-slot:activator='{ on }')
          v-list-item(two-line='', @click="redirect('/maker')", v-on='on')
            font-awesome-icon(:icon="['fas', 'music']", size='2x')
        span Music Maker
</template>

<script>
import router from '@/router'
export default {
  name: 'Sidebar',
  data: () => ({
    navigationDrawer: true
  }),
  methods: {
    redirect (route) {
      router.push(route)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_vars.scss';

#ottava-logo {
  min-width: 36px;
  width: 55px;
  height: auto;
  margin: auto;
}

.v-navigation-drawer--temporary:not(.v-navigation-drawer--close), .v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close) {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}

.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
  background-color: hsla(0, 0, 0, 0) !important;
}

.theme--dark.v-navigation-drawer {
  background-color: #3e3e3eff !important;
}

#nav-drawer {
  width: 64px !important;
  transform: translate(0%) !important;
  position: fixed;
}

</style>
