<template lang="pug">
  v-navigation-drawer(v-model='drawer', :color='color', :expand-on-hover='expandOnHover',
    :mini-variant='miniVariant', absolute='', dark='')
    v-list.py-0(dense='', nav='')
      v-list-item(two-line='')
        img#ottava-logo(src='@/assets/ottava-logo.svg')
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      drawer: true,
      color: 'primary',
      miniVariant: false,
      expandOnHover: false,
      background: false
    }
  }
}
</script>

<style lang="scss">

#ottava-logo {
  width: 30%;
  height: auto;
  margin: auto;
}

</style>
