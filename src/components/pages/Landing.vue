<template lang='pug'>
  div#landing
    v-container
      img#main-logo(src='@/assets/ottava-logo-full.svg')
      h1#title.text-center.spacer-sm Create. Share. Discover.
      p.text-center.section-content Ottava is the perfect place to create new, fresh musical pieces using only your keyboard.
      v-row
        v-btn(@click="redirect('/login')", color='#db38ae', style='margin-right: 2%; margin-left: auto;') Log in
        v-btn(@click="redirect('/register')", color='#009696', style='margin-right: auto;') Create an account
      img#landing-keyboard.spacer-md(src='@/assets/material.svg')
</template>

<script>
import router from '@/router'
export default {
  name: 'Landing',

  methods: {
    redirect: (route) => {
      router.push(route)
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_vars.scss";

.login-group {
  margin-left: auto;
  margin-right: auto;
}

body {
  background-color: #3e3e3e;
}

#landing {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/landing-backdrop.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.section-content {
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: -1px;
}

#title {
  font-weight: 700 !important;
}

.headline {
  font-size: 3.75rem !important;
}

#main-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: auto;
}

#landing-keyboard {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 25%;
  padding-right: 25%;
}
</style>