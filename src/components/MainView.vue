<template lang='pug'>
  div
    SidebarToggle
    Sidebar
    router-view
</template>

<script>
  import Sidebar from './Sidebar/Sidebar'
  import SidebarToggle from './Sidebar/SidebarToggle'
  export default {
    name: 'MainView',
    components: {
      Sidebar
    }
  }
</script>