<template lang='pug'>
  div#login
    v-container
      v-layout.row.wrap.align-center
        div.spacer-md
        v-card.d-inline-block.mx-auto.align-center#login-card(outlined='', max-width='800', width='800')
          v-container
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-img(contain='', width='150', src='@/assets/ottava-logo.svg')
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-card-title Login
            v-row(justify='center', align='center')
              v-container
                Alert(v-if="this.loginStatus.error" :msg="this.loginStatus.msg", :alertType="this.loginStatus.alertType")
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='text', name='username', label='Username', v-model='input.username', placeholder='Username')
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='password', name='password', label='Password', v-model='input.password', placeholder='Password')
            v-row(justify='center', align='center')
              v-container
                v-btn(depressed='', outlined='', block='', color='#db38ae', v-on:click="login()") Login
            v-row(justify='center', align='center')
                p.text-center New around here? Create
                a(@click="redirect('/register')") an account
</template>

<script>
  import Alert from '@/components/general-components/Alert'
  import router from 'vue-router'

  export default {
    name: 'Login',
    components: {
      Alert
    },
    data() {
      return {
        loginStatus: {
          error: false,
          msg: '',
          alertType: ''
        },
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
        const username = this.input.username
        const password = this.input.password
        if (username === '' || password === '') {
          if (username === '' && password === '') {
            this.setAlertStatus('Username and Password are required fields!', 'error')
          } else if (username === '') {
            this.setAlertStatus('Username is a required field!', 'error')
          } else {
            this.setAlertStatus('Password is a required field', 'error')
          }
        } else {
            this.loginStatus.error = false
        }

      },
      setAlertStatus(msg, type) {
        this.loginStatus.msg = msg
        this.loginStatus.alertType = type
        this.loginStatus.error = true
      },
      redirect (route) {
        router.push(route)
      }
    } 
  }
</script>

<style lang='scss'>
@import '@/styles/_vars.scss';

  #login {
    background-color: $ottava-lime;
    height: 100vh;
  }

  // #login-card {
    
  // }
</style>