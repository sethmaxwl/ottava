<template lang='pug'>
  div#login
    v-container
      v-layout.row.wrap.align-center
        div.spacer-md
        v-card.d-inline-block.mx-auto.align-center(outlined='', max-width='800', width='800')
          v-container
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-img(contain='', width='150', src='@/assets/ottava-logo.svg')
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-card-title Login
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='text', name='username', label='Username', v-model='input.username', placeholder='Username')
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='password', name='password', label='Password', v-model='input.password', placeholder='Password')
            v-row(justify='center', align='center')
              v-container
                v-btn(depressed='', outlined='', block='', color='#db38ae', v-on:click='login()') Login
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        rules: [
          value => !!value || 'Required.'
        ],
        input: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        const username = this.username;
        const password = this.password;
        if (username !== '' && password !== '') {

        } else {

        }

      }
    }
  }
</script>

<style lang='scss'>

</style>