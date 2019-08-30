<template lang='pug'>
  div#landing
    v-container#container(fluid='')
      v-row
        img#main-logo(src='../assets/ottava-logo-full.svg')
      v-row.spacer-sm
        h1.text-center Create. Share. Discover.
      v-row
        p.text-center Compose your own masterpiece for everyone to enjoy.
      v-row.spacer-md
        img#landing-keyboard(src='../assets/landing-keyboard.svg')
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style lang="scss">
@import "@/styles/_vars.scss";

#container {
  margin-left: -10%;
}

#landing {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/landing-backdrop2.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -$navbar-margin auto;
}

h1 {
  font-size: 2em !important;
}

#main-logo {
  display: block;
  margin: auto;
  width: 30vw;
  height: auto;
}

#landing-keyboard {
  display: block;
  margin: auto;
  width: 50%;
}
</style>