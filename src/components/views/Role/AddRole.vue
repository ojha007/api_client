<template>
  <section class="content">
    <div class="add-role">
      <div class="box">
        <form @submit.prevent="addRole" class="form-horizontal" style="padding: 0">
          <div class="box-body">
            <div class="row">
              <div :class="{ 'has-error': errors.has('name') }" class="col-md-12">
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="role" style="margin-top: 5px;">Create Role :</label>
                  <div class="col-sm-4">
                    <input :class="{ 'input-error': errors.has('name') }" autofocus="autofocus"
                           class="form-control " id="role" name="name"
                           type="text" v-model="name" v-validate="'required|min:3|max:100'">
                    <input name="guard_name" type="hidden" v-model="guard_name">
                    <span class="has-error">{{ errors.first('name') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-footer">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-6">
                  <button class="btn btn-danger btn-flat" type="button">Cancel</button>
                </div>
                <div class="col-md-6">
                  <button :disabled="!formValidated" class="btn btn-primary pull-right btn-flat" type="submit">Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  </section>
</template>
<script>
  // import {mapActions} from 'vuex'

  export default {
    name: 'CreateRole',
    data() {
      return {
        name: '',
        guard_name: 'Api'
      }
    },
    methods: {
      addRole() {
        this.$validator.validateAll().then((response) => {
          if (response) {
            this.$store.dispatch('addRoleWithPermission', {
              name: this.name,
              guard_name: this.guard_name
            })
          }
        })
      }
      // storeRole() {
      //   this.storeRoleWithPermission(this.name, this.guard_name)
      // },
      // ...mapActions({
      //   storeRoleWithPermission: 'addRoleWithPermission'
      // })
    },
    computed: {
      formValidated() {
        return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).some(key => this.fields[key].valid)
      }
    }
  }
</script>
<style>
  .has-error {
    color: red;
  }

  .has-success {
    color: green;
  }
</style>
