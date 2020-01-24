<template>
  <section class="content">
    <div class="add-role">
      <div class="box">
        <form @submit.prevent="addRole" class="form-horizontal" style="padding: 0">
          <div class="box-header">
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
          <hr>
          <div class="box-body">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-8 col-md-offset-2">
                  <div class="col-md-4" v-for="(index,key) in permissions">
                    <div class="pretty p-icon p-curve p-bigger">
                      <input name="permissions[]" type="checkbox" v-validate.initial="'required:true'"/>
                      <div class="state p-primary">
                        <i class="icon mdi mdi-close"/>
                        <label>{{index.name}}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box-footer">
            <div class="row">
              <div class="col-md-12">
                <div class="col-md-6">
                  <button class="btn btn-danger pull-left btn-flat" type="button">Cancel</button>
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
  // import  from 'pretty-checkbox-vue'
  import {mapActions} from 'vuex'

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
      },
      ...mapActions(['getPermissions'])
    },
    computed: {
      Permissions() {
        this.$store.dispatch('getPermissions')
      },
      formValidated() {
        return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).some(key => this.fields[key].valid)
      },
      permissions() {
        return this.$store.state.user.permissions
      }
    }
  }
</script>
<style>
  .has-error {
    color: #ed110c;
  }

  .has-error .control-label {
    color: #ed110c;
  }

  .has-error .form-control {
    border-color: #ed110c;
  }

  .has-success {
    color: green;
  }
</style>
