<template lang='pug'>
  v-alert(:type="alertType", dense='', outlined='', prominent='') {{ msg }}
</template>

<script>
  export default {
    name: 'Alert',
    props: ['msg', 'alertType']
  }
</script>

<style lang="scss">
.velmld-overlay {
  z-index: 4 !important;
}
</style>