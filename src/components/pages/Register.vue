<template lang='pug'>
  div#register
    Loader(:isLoading='isRegistering')
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
                v-card-title Register
              v-card-text.text-center Welcome to Ottava! We just need a few things to get you started.
            v-row(justify='center', align='center')
              v-container
                Alert(v-if="this.registerAlert.visible" :msg="this.registerAlert.msg", :alertType="this.registerAlert.alertType")
            v-container
              validation-observer(v-slot='{ invalid, validate }')
                form(@submit.prevent='validate().then(submit)')
                  validation-provider(name='email', rules='required|email', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-text-field(type='text', ref='email', label='Email Address', v-model='input.email', :error-messages='errors', outlined='')
                  validation-provider(name='password', rules='required|strong-password', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-text-field(:type="showPass ? 'text' : 'password'", ref='password', label='Password', v-model='input.password', :error-messages='errors', outlined='', :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'", @click:append="showPass = !showPass")
                  validation-provider(name='confirmPassword', rules='required|confirmed:password', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-text-field(:type="showConfirmPass ? 'text' : 'password'", ref='confirmPassword', label='Confirm Password', v-model='input.confirmPassword', :error-messages='errors', outlined='', :append-icon="showConfirmPass ? 'mdi-eye' : 'mdi-eye-off'", @click:append="showConfirmPass = !showConfirmPass")
                v-row(justify='center', align='center')
                  v-container
                    v-btn(depressed='', outlined='', block='', color='#db38ae', v-on:click="register()", :disabled='invalid') Register
</template>

<script>
  import Alert from '@/components/general-components/Alert'
  import Loader from '@/components/general-components/Loader'
  import { ValidationProvider, ValidationObserver } from 'vee-validate'
  import { extend } from 'vee-validate'
  import { required, email, confirmed } from 'vee-validate/dist/rules'

  extend('email', {
    ...email,
    message: 'Email address is invalid'
  })
  extend('required',  {
    ...required,
    message: 'This field is required'
  })
  extend('confirmed', {
    ...confirmed,
    message: 'Passwords do not match'
  })
  extend('strong-password', {
    validate: value => {
      //eslint-disable-next-line
      const strongPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
      return strongPass.test(value)
    },
    message: 'Password must be at least 8 characters long and contain: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (Ex. $ % &)'
  })

  import firebase from 'firebase'

  export default {
    name: 'Register',
    components: {
      Alert,
      Loader,
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        registerAlert: {
          visible: false,
          msg: '',
          alertType: ''
        },
        input: {
          password: '',
          confirmPassword: '',
          email: ''
        },
        isRegistering: false,
        showPass: false,
        showConfirmPass: false
      }
    },
    methods: {

      register() {
        this.isRegistering = true
        const self = this
        firebase.auth().createUserWithEmailAndPassword(this.input.email, this.input.password).then(
          function () {
            self.isRegistering = false
            self.setAlertStatus('User Created!', 'success')
          },
          function (err) {
            self.isRegistering = false
            if (err.code === 'auth/email-already-in-use') {
              self.setAlertStatus('An account is already linked to that email address!', 'error')
            }
          }
        )
      },

      setAlertStatus(msg, type) {
        this.registerAlert.msg = msg
        this.registerAlert.alertType = type
        this.registerAlert.visible = true
      }
    }
  }
</script>

<style lang="scss">
@import '@/styles/_vars.scss';

  #register {
    background-color: $ottava-lime;
    height: 100vh;
  }

  .content {
    padding-left: 10% !important;
    padding-right: 10% !important;
  }
</style>