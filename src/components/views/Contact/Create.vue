<template>
  <div>
    <ul v-for="(item,index) in roles">
      <li :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Create',
    computed: mapGetters({
      roles: 'ROLES'
    }),
    methods: {
      ...mapActions(['getAllRoles'])
    },
    created() {
      this.getAllRoles()
    }
  }
</script>
