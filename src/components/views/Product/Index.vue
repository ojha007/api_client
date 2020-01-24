<template>
  <section class=" content product">
    <div class="box">
      <div class="box-header">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-6 col-md-offset-6 ">
              <router-link to="products/create">
                <button class="btn btn-primary btn-flat pull-right" type="button">
                  <i class="fa fa-plus">&nbsp;Add Product</i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
          </div>
        </div>
      </div>
      <div class="box-footer">
        <div class="row">
          <div class="col-md-12">
            Footer
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import Button from '../../widgets/Button'

  export default {
    name: 'Index',
    components: {Button}
  }
</script>
