<template>
  <div class="role">
    <div class="row " style="margin-bottom: 5px;">
      <div class="col-md-12">
        <div class="pull-right">
          <button @click="addRole" class="btn btn-primary btn-flat btn-sm"
                  data-container="body"
                  role="button"
                  title="Add Role">
            <i class="fa fa-plus"/>
            Add Role
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <table class="table table-responsive table-bordered table-hover">
            <thead>
            <tr>
              <th v-for="(name,key) in tableHeaders">
                {{name}}
              </th>
            </tr>
            </thead>
            <tbody class="table">
            <tr v-for="(data,key) in tableBody">
              <td class="text-center" v-text="data.id"/>
              <td class="text-center" v-text="data.name"/>
              <td class="text-center" v-text="data.guard_name"/>
              <td>
                <button @click="roleEdit(data.id)" class="btn btn-success btn-flat btn-sm"
                        data-container="body"
                        role="button"
                        title="edit">
                  <i class="fa fa-edit"/>
                </button>
                <button @click="roleDelete(data.id)" class="btn btn-danger btn-flat btn-sm"
                        data-container="body"
                        role="button"
                        title="Delete">
                  <i class="fa fa-trash"/></button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <nav aria-label="pagination" class="pull-right">
          <ul class="pagination">
            <li class="page-item disabled">
              <a aria-disabled="true" class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'CustomTable',
    props: {
      tableHeaders: {
        type: Array,
        required: true
      },
      tableBody: {
        type: Array,
        required: true
      },
      tableFooter: {
        type: Array,
        required: false
      }
    },
    data() {
      return {
        check: ''
      }
    },
    methods: {
      roleEdit(id) {
        this.$toasted.show('Toasted !!', {
          theme: 'bubble',
          position: 'bottom-right',
          duration: 1000
        })
      },
      roleDelete(id) {
        console.log(id)
        this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      },
      addRole() {
        this.$router.push('/create/role')
      }
    }
  }
</script>
