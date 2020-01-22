<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/">
        <img src="/static/img/copilot-logo-white.svg" alt="Logo" class="img-responsive center-block logo"></a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>


      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <AppSelect/>
          <messages-menu></messages-menu>
          <notifications-menu></notifications-menu>
          <tasks-menu></tasks-menu>
          <user-menu :user="user"></user-menu>

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
    // import {mapState} from 'vuex'
    import MessagesMenu from './MessagesMenu'
    import NotificationsMenu from './NotificationsMenu'
    import TasksMenu from './TasksMenu'
    import UserMenu from './UserMenu'
    import AppSelect from './AppSelect'
    import api from '../../api'

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
                  console.log(response.data)
                })
      }
    }

    // computed: {
    // ...
    //     mapState([
    //         'userInfo'
    //     ])
    // }
    // }
</script>
