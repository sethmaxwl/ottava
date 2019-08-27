<template lang='pug'>
  div#landing
    v-container(fluid='')
      p hello
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style lang="scss">
@import "@/styles/_vars.scss";

#landing {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/landing-backdrop2.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -$navbar-margin auto;
}
</style>