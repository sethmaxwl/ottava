<template lang='pug'>
  div#settings
    Loader(:isLoading='updating')
    v-container
      v-layout.row.wrap.align-center
        v-card.d-inline-block.mx-auto.align-center(outlined='', max-width='800', width='800')
          v-container.content
            v-row(justify='center', align='center')
              v-col(cols='auto')
                v-card-title Update Profile
            v-row(justify='center', align='center')
              v-container
                Alert(v-if='settingsAlert.visible', :msg='settingsAlert.msg', :alertType='settingsAlert.alertType')
            v-container
              validation-observer(v-slot='{ invalid, validate }')
                form(@submit.prevent='validate().then(submit)')
                  validation-provider(name='email', rules='required', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-text-field(type='text', ref='email', label='Email', v-model='user.email', disabled=true, hint='This field cannot be changed.', persistent-hint='', :error-messages='errors')
                  v-row(justify='center', align='center')
                    v-text-field(type='text', ref='displayName', label='Display Name', v-model='newDisplayName')
                  validation-provider(name='photo', rules='file-size', v-slot='{ errors }')
                    v-row(justify='center', align='center')
                      v-file-input(label='Profile Picture', chips='', show-size='', prepend-icon='mdi-camera', accept='image/png, image/jpeg', v-model='photo', :error-messages='errors')
                v-row(justify='center', align='center')
                  v-container
                    v-btn(depressed='', outlined='', block='', color='#db38ae', v-on:click='submit()', :disabled='invalid') Submit Changes
</template>

<script>
import Loader from '@/components/general-components/Loader'
import Alert from '@/components/general-components/Alert'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import firebase from 'firebase'
import router from '@/router'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('file-size', {
  validate: value => {
    return value.size < 10000000
  },
  message: 'File size must be less than 10 MB.'
})

export default {
  name: 'Settings',
  components: {
    Loader,
    Alert,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    user: {
      type: Object
    }
  },
  data: () => {
    return {
      updating: false,
      settingsAlert: {
        visible: false,
        msg: '',
        alertType: ''
      },
      newDisplayName: '',
      photo: null,
      photoURL: null
    }
  },
  methods: {

    submit() {
      this.updating = true
      const self = this
      const fb = firebase.auth().currentUser
      if (this.photo) {
        let profileTitle = 'profile.'
        if (this.photo.type === 'image/png') {
          profileTitle += 'png'
        } else {
          profileTitle += 'jpg'
        }
        let storageRef = firebase.storage().ref().child(fb.uid + '/' + profileTitle)
        storageRef.put(this.photo).then(
          () => {
            storageRef.getDownloadURL().then(
              (url) => {
                self.photoURL = url
              }
            ).then(
              () => {
                self.update()
              }
            )
          }
        )
      } else {
        this.update()
      }
    },

    update() {
      // TODO fix bug with resetting display name after not setting new name on update
      const fb = firebase.auth().currentUser
      const self = this
      if (this.newDisplayName === null) {
        this.newDisplayName = this.user.displayName
      }
      if (this.photoURL === null) {
        this.photoURL = this.user.photoURL
      }
      console.log('new display name: ' + this.newDisplayName)
      fb.updateProfile({
        displayName: self.newDisplayName,
        photoURL: self.photoURL
      }).then(
        () => {
          self.updating = false
          self.$store.dispatch('auth/login', fb)
          document.location.reload(true)
        }
      ).catch(
        () => {
          self.updating = false
          self.setAlertStatus('Something went wrong when updating your profile. Please try again.')
        }
      )
    },

    setAlertStatus(msg, type) {
      this.settingsAlert.msg = msg
      this.settingsAlert.visible = true
      this.settingsAlert.alertType = type
    },

    redirect(route) {
      router.push(route)
    }
  }
}
</script>

<style lang='scss'>
  @import '@/styles/_vars.scss';
  #settings {
    width: 100% !important;
  }
</style>