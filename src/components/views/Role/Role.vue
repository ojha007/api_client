<template>
  <section class="content">
    <CustomTable :table-headers="headers" :tableBody="allRoles"/>
    <router-view/>
  </section>
</template>
<style>

</style>
<script>

  import DataTables from '../../widgets/DataTables'
  import Button from '../../widgets/Button'
  import Modal from '../../widgets/Modal'
  import CustomTable from '../../widgets/table'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Role',
    components: {CustomTable, Modal, DataTables, Button},
    data() {
      return {
        headers: ['S.NO', 'Role', 'Guard Name', 'Action'],
        isModalVisible: false
      }
    },
    computed: mapGetters({
      allRoles: 'ROLES'
    }),
    methods: {
      ...mapActions(['getAllRoles'])
    },
    created() {
      this.getAllRoles()
    }
  }
</script>
