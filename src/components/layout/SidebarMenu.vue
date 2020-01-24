<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link class="pageLink" tag="li" to="/">
      <a>
        <i class="fa fa-desktop"/>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link class="pageLink" tag="li" to="/tables">
      <a>
        <i class="fa fa-table"/>
        <span class="page">Tables</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link class="pageLink" tag="li" to="/tasks">
      <a>
        <i class="fa fa-tasks"/>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link class="pageLink" tag="li" to="/setting">
      <a>
        <i class="fa fa-cog"/>
        <span class="page">Settings</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"/>
        <span class="treeview-title">Product</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"/>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <!--          <router-link to="/products_categories">-->
          <!--            -->
          <!--          </router-link>-->
          <a href="#">
            <i class="fa fa-file-word-o"/> Product Categories
          </a>
        </li>
        <li>
          <router-link to="/products">
            <i class="fa fa-file-picture-o"/> Products
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"/> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">LOGS</li>
    <router-link class="pageLink" tag="li" to="/access">
      <a>
        <i class="fa fa-book"/>
        <span class="page">Access</span>
      </a>
    </router-link>
    <router-link class="pageLink" tag="li" to="/server">
      <a>
        <i class="fa fa-hdd-o"/>
        <span class="page">Server</span>
      </a>
    </router-link>
    <router-link class="pageLink" tag="li" to="/repos">
      <a>
        <i class="fa fa-heart"/>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </a>
    </router-link>

    <li class="header">PAGES</li>
    <router-link class="pageLink" tag="li" to="/login">
      <a>
        <i class="fa fa-circle-o text-yellow"/>
        <span class="page"> Login</span>
      </a>
    </router-link>
    <router-link class="pageLink" tag="li" to="/404">
      <a>
        <i class="fa fa-circle-o text-red"/>
        <span class="page"> 404</span>
      </a>
    </router-link>
    <li class="header">Setting</li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-cogs"/>
        <span class="treeview-title">Configuration</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"/>
        </span>
      </a>
      <ul class="treeview-menu">
        <router-link class="pageLink" tag="li" to="/role">
          <a>
            <i class="fa fa-users"/>
            Roles
          </a>
        </router-link>

        <router-link class="pageLink" tag="li" to="/permission">
          <a>
            <i class="fa fa-cog"/>
            Permissions
          </a>
        </router-link>
      </ul>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'SidebarMenu'
  }
</script>
<style>
  /* override default */
  .sidebar-menu > li > a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active > a > .fa-angle-left,
  .sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
    animation-name: rotate;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  .treeview-title {
    z-index: 1;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
