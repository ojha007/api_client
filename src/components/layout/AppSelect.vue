<template>
  <li class="dropdown app-select">
    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-th"/>
      <span class="label label-danger"/>
    </a>
    <ul class="dropdown-menu" style="border-radius: 0; width: 200px; padding: 5px 0 0 0;" >
      <li >
        <div class="pull-left" >
          <a class="btn btn-app bg-aqua" style="font-size: 15px" href="http://erp.test/account/auth">
            <div class="icon" >
              <i class="ion ion-ios-book" style="font-size: 40px"/>
            </div>
            Accounts
          </a>
        </div>
        <div class="pull-left" >
          <a class="btn btn-app bg-green" style="font-size: 15px" href="http://erp.test/inventory/auth">
            <div class="icon" >
              <i class="ion ion-ios-cart" style="font-size: 40px"/>
            </div>
            Inventory
          </a>
        </div>
      </li><li>
    </li></ul>
  </li>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
      name: 'AppSelect',
      computed: {
        ...mapState([
          'userInfo'
        ])
      }
    }
</script>
