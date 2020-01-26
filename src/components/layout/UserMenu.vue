<template>
  <li class="dropdown user user-menu">
    <a href="javascript:void (0);" class="dropdown-toggle" data-toggle="dropdown">
      <img :src="'https://'" class="users-image" alt="User Image">
      <span class="hidden-xs">{{user.user.name}}</span>
    </a>
    <!-- Account Info and Menu -->
    <ul class="dropdown-menu">
      <li class="user-header" style="height:auto;min-height:85px;padding-bottom:15px;">
        <p>
          <span>{{user.user.name}}</span>
          <br/>
          <span>{{user.user.email}}</span>
          <small v-for="role in user.roles" :key="role">{{role}}</small>
        </p>
      </li>
      <li class="user-footer">
        <a href="javascript:void (0)" class="btn btn-default btn-flat btn-block">
          <i class="fa fa-sign-out"/>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
    export default {
      name: 'UserMenu',
      props: ['user'],
      mounted() {
        console.log(this.user.user)
      }
    }
</script>
