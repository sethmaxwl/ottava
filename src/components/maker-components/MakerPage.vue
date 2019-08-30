<template lang='pug'>
  div#maker
    v-row
    MakerSettingsSidebar
</template>

<script>
  import MakerSettingsSidebar from '@/components/maker-components/MakerSettingsSidebar'
  export default {
    name: 'Maker',
    components: {
        MakerSettingsSidebar
    },
    created: function () {
      window.addEventListener('keypress', this.keyMonitor)
    },
    methods: {
      keyMonitor: function (event) {
        console.log(event.key)
      }
    }
  }
</script>

<style lang="scss">
@import "@/styles/_vars.scss";

#maker {
  width: 100vw;
  height: 100vh;
  background-color: #00ff70;
}
</style>