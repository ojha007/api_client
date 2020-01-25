<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/">
        <img alt="Logo" class="img-responsive center-block logo" src="/static/img/copilot-logo-white.svg"></a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a class="sidebar-toggle" data-toggle="offcanvas" href="javascript:;" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>


      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <AppSelect/>
          <messages-menu/>
          <notifications-menu/>
          <tasks-menu/>
          <user-menu :user="user"/>

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import MessagesMenu from './MessagesMenu'
  import NotificationsMenu from './NotificationsMenu'
  import TasksMenu from './TasksMenu'
  import UserMenu from './UserMenu'
  import AppSelect from './AppSelect'
  import api from '../../api'
  import {mapState} from 'vuex'

export default {
    name: 'DashHeader',
    data() {
      return {
        user: null
      }
    },
    components: {
      MessagesMenu,
      NotificationsMenu,
      TasksMenu,
      UserMenu,
      AppSelect
    },
    beforeCreate() {
      api.request('get', '/user')
        .then(response => {
          console.log(response)
        })
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    }
  }
</script>
