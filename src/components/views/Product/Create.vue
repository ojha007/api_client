<template>
  <section class=" content product">

    <div class="box">
      <form @submit.prevent="createProduct" class="form-horizontal" style="padding: 0">
        <div class="box-header">
          <div class="row">
            <div class="col-md-12">
              <!--            <div class="col-md-6 col-md-offset-6 ">-->
              <!--              <button class="btn btn-primary btn-flat pull-right" type="button">-->
              <!--                <i class="fa fa-plus">&nbsp;Add Product</i>-->
              <!--              </button>-->
              <!--            </div>-->
            </div>
          </div>
        </div>
        <hr>
        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              <div :class="{ 'has-error': errors.has('name') }" class="col-md-6">
                <div class="form-group">
                  <label class="col-md-2 control-label" for="name">Name</label>
                  <div :class="{ 'input-error': errors.has('name') }" class="col-md-8">
                    <input autofocus class="form-control col-md-8" id="name"
                           name="name" type="text"
                           v-model="name"
                           v-validate="'required|min:3|max:100'">
                    <span class="has-error">{{ errors.first('name') }}</span>
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
                <button class="btn btn-danger btn-flat pull-left" title="Cancel" type="button">Cancel</button>
              </div>
              <div class="col-md-6">
                <button :disabled="!formValidated" class="btn btn-primary pull-right btn-flat" title="Cancel"
                        type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  </section>
</template>
<script>
  import Button from '../../widgets/Button'
  // import {formValidated} from '../../../filters'

  export default {
    name: 'Create',
    components: {Button},
    data() {
      return {
        name: ''
      }
    },
    methods: {
      createProduct() {
        this.$validator.validateAll().then((response) => {
          if (response) {
            // this.$store.dispatch('createProduct', {
            //   name: this.name
            // })
          }
        })
      }
    },
    computed: {
      formValidated() {
        return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).some(key => this.fields[key].valid)
      }
    }

  }
</script>
