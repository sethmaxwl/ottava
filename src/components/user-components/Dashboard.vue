<template lang='pug'>
  div#dashboard
    v-card.mx-auto(min-width='100%')
      v-list-item(two-line='')
        v-list-item-content
          Alert(v-if='emailNotVerified', :alertType="'warning'", :msg="'Email address has not been verified. Please verify it through your user settings.'")
          v-list-item-avatar#avatar(color='indigo', size='80')
            template(v-if='profilePicture')
              img(:src='profilePicture')
            template(v-else)
              font-awesome-icon(:icon="['far', 'user']", size='2x', color='white')
          v-list-item-title.text-center.headline.mb-1 {{ this.username }}
          div.overline.mb-4.text-center(v-if='displayNameUnset') Display name has not been set. Navigate to Profile to set one.
    v-bottom-navigation(v-model='userSection', shift='', :mandatory='true', light='', grow='', color='#009696')
      v-btn(value='posts')
        span Posts
        v-icon mdi-library-music
      v-btn(value='starred')
        span Starred
        v-icon mdi-star
      v-btn(value='settings')
        span Profile
        v-icon mdi-account-edit
    Settings(v-if="userSection === 'settings'", :user='user')
      
</template>

<script>
// import firebase from 'firebase'
import router from '@/router'
import Alert from '@/components/general-components/Alert'
import Settings from '@/components/user-components/Settings'

export default {
  name: 'Dashboard',
  created() {
    this.user = this.$store.getters['auth/getUser']
    this.user.displayName !== null ? (this.username = this.user.displayName, this.displayNameUnset = false ) : this.username = this.user.email
    this.profilePicture = this.user.photoURL
    this.emailNotVerified = !this.user.emailVerified
    console.log(this.user)
  },
  components: {
    Alert,
    Settings
  },
  data: () => ({
    user: {},
    username: null,
    profilePicture: null,
    displayNameUnset: true,
    emailNotVerified: true,
    userSection: 'settings'
  }),
  methods: {
    redirect: (route) => {
      router.push(route)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_vars.scss';
@import '@/styles/_global_styles.scss';

#avatar {
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: 80px;
}
</style>