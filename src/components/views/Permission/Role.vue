<template>
  <section class="content">

    <DataTables :list="'All Roles'">
      <Button
        btn-text="Add Role"
        btn-class="btn-primary"
        margin-top="margin-top:16px;"
        @click="showModal"
      >

      </Button>
    </DataTables>
    <Modal
      :title="'Create Role'"
      v-show="isModalVisible"
      @close="closeModal"
    />
  </section>
</template>
<style>

</style>
<script>

    import DataTables from '../../widgets/DataTables'
    import Button from '../../widgets/Button'
    import Modal from '../../widgets/Modal'

    export default {

      name: 'Role',
      components: {Modal, DataTables, Button},
      data() {
        return {

          isModalVisible: false
        }
      },
      mounted() {
        console.log(this.$store)
      },
      methods: {
        showModal() {
          this.isModalVisible = true
        },
        closeModal() {
          this.isModalVisible = false
        }

      }
    }
</script>
