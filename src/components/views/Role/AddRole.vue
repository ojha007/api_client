<template>
  <section class="content">
    <ValidationObserver v-slot="{ invalid }">
      <div class="add-role">
        <div class="box">
          <div class="box-body">
            <form @submit.prevent="addRole" class="form-horizontal" style="padding: 0">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="col-sm-2 control-label" for="role" style="margin-top: 5px;">Create Role :</label>
                    <div class="col-sm-4">
                      <ValidationProvider name="name" rules="required|text" v-slot="v">
                        <input autofocus="autofocus"
                               class="form-control" id="role" name="name"
                               placeholder="Name" type="text" v-model="name">
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>

                </div>
              </div>
            </form>

          </div>
        </div>
        <div class="box-footer">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6">
                <button class="btn btn-danger btn-flat" type="button">Cancel</button>
              </div>
              <div class="col-md-6">
                <button :disabled="invalid" class="btn btn-primary pull-right btn-flat" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </section>
</template>
<script>
  import {ValidationObserver} from 'vee-validate'

  export default {
    name: 'CreateRole',
    comments: {ValidationObserver},
    data() {
      return {
        name: '',
        errors: '',
        invalid: true
      }
    },
    methods: {
      addRole() {

      }
    }
  }
</script>
