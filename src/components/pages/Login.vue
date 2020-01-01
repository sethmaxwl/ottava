<template lang='pug'>
  div#login
    Loader(:isLoading='isLoggingIn')
    v-container
      v-layout.row.wrap.align-center
        div.spacer-md
        v-card.d-inline-block.mx-auto.align-center(outlined='', max-width='800', width='800')
          v-container.content
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-img(contain='', width='100', src='@/assets/ottava-logo.svg')
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-card-title Login
              v-card-text.text-center Welcome back to Ottava.
            v-row(justify='center', align='center')
              v-container
                Alert(v-if="this.loginAlert.visible" :msg="this.loginAlert.msg", :alertType="this.loginAlert.alertType")
            v-container
              validation-observer(v-slot='{ invalid, validate }')
                form(@submit.prevent='validate().then(submit)')
                  validation-provider(name='email', rules='required|email', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-text-field(type='text', ref='email', label='Email Address', v-model='input.email', :error-messages='errors', outlined='')
                  validation-provider(name='password', rules='required', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-text-field(:type="showPass ? 'text' : 'password'", ref='password', label='Password', v-model='input.password', :error-messages='errors', outlined='', :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'", @click:append="showPass = !showPass")
                v-row(justify='center', align='center')
                  v-container
                    v-btn(depressed='', outlined='', block='', color='#db38ae', v-on:click="login()", :disabled='invalid') Login
</template>

<script>
  import Alert from '@/components/general-components/Alert'
  import Loader from '@/components/general-components/Loader'

  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  import { extend } from 'vee-validate'
  import { required, email } from 'vee-validate/dist/rules'

  extend('email', {
    ...email,
    message: 'Email address is invalid'
  })
  extend('required',  {
    ...required,
    message: 'This field is required'
  })

  import firebase from 'firebase'

  export default {
    name: 'Login',
    components: {
      Alert,
      Loader,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        loginAlert: {
          visible: false,
          msg: '',
          alertType: ''
        },
        input: {
          password: '',
          confirmPassword: '',
          email: ''
        },
        isLoggingIn: false,
        showPass: false,
        showConfirmPass: false
      }
    },
    methods: {

      login() {
        this.isLoggingIn = true
        const self = this
        const fb = firebase.auth()
        fb.signInWithEmailAndPassword(this.input.email, this.input.password).then(
          () => {
            self.$store.dispatch('auth/login', fb.currentUser)
            self.isLoggingIn = false
          }
        ).catch(
          (err) => {
            self.isLoggingIn = false
            console.log(err)
            let errMessage = 'Something seems to have gone wrong. Please contact support if this persists.'
            switch (err) {
              case 'auth/user-disabled':
                errMessage = 'This account is disabled.'
                break
              case 'auth/user-not-found':
                errMessage = 'No account exists under that email address.'
                break
              case 'auth/wrong-password':
                errMessage = 'That password is incorrect. Please try again.'
                break
            }
            self.setAlertStatus(errMessage, 'error')
          }
        )
      },

      setAlertStatus(msg, type) {
        this.loginAlert.msg = msg
        this.loginAlert.alertType = type
        this.loginAlert.visible = true
      }
    }
  }
</script>

<style lang="scss">
@import '@/styles/_vars.scss';

  #login {
    background-color: $ottava-lime;
    height: 100vh;
  }

  .content {
    padding-left: 10% !important;
    padding-right: 10% !important;
  }
</style>