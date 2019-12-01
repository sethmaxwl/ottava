<template lang='pug'>
  div#register
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
                v-card-title Register
              v-card-text.text-center Welcome to Ottava! We just need a few things to get you started.
            v-row(justify='center', align='center')
              v-container
                Alert(v-if="this.registerStatus.error" :msg="this.registerStatus.msg", :alertType="this.registerStatus.alertType")
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='text', name='email', label='Email Address', v-model='input.email', placeholder='Email')
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='text', name='username', label='Username', v-model='input.username', placeholder='Username')
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='password', name='password', label='Password', v-model='input.password', placeholder='Password')
            v-row(justify='center', align='center')
              v-container
                v-text-field(type='password', name='confirmPassword', label='Confirm Password', v-model='input.confirmPassword', placeholder='Confirm Password')
            v-row(justify='center', align='center')
              v-container
                v-btn(depressed='', outlined='', block='', color='#db38ae', v-on:click="register()") Register
</template>

<script>
  import Alert from '@/components/general-components/Alert'

  export default {
    name: 'Register',
    components: {
      Alert
    },
    data() {
      return {
        registerStatus: {
          error: false,
          msg: '',
          alertType: ''
        },
        rules: [
          value => !!value || 'Required.'
        ],
        input: {
          username: '',
          password: '',
          confirmPassword: '',
          email: ''
        }
      }
    },
    methods: {
      preflight() {
        const username = this.input.username
        const password = this.input.password
        const email = this.input.email
        const confirmPassword = this.input.confirmPassword
        let blankFields = []
        if (username === '') blankFields.push('Username')
        if (password === '') blankFields.push('Password')
        if (email === '') blankFields.push('Email')
        if (confirmPassword === '') blankFields.push('Confirm Password')
        if (blankFields.length !== 0) {
          let message
          (blankFields.length === 1) ? message = blankFields.join(', ') + ' is a required field!' : message = blankFields.join(', ') + ' are required fields!'
          return message
        }
        if (password !== confirmPassword) {
          return 'Passwords do not match!'
        }
      },
      register() {
        let validityCheck = this.preflight()
        if (validityCheck !== '') {
          this.setAlertStatus(validityCheck, 'error')
        } else {
          this.registerStatus.error = false
        }
      },
      setAlertStatus(msg, type) {
        this.registerStatus.msg = msg
        this.registerStatus.alertType = type
        this.registerStatus.error = true
      }
    }
  }
</script>

<style lang='scss'>

</style>