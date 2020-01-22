<template>
  <button
    :class="'btn ' + btnClass"
    :style="marginTop"
    type="button"
    v-text="btnText"
  >
    <i class="fa fa-home"/>
    <i :class="'fa' + faIcon" v-if="faIcon"/>
  </button>
</template>
<style>

</style>
<script>
  export default {
    name: 'Button',
    props: {
      btnClass: {
        type: String,
        required: true
      },
      btnText: {
        type: String,
        required: false
      },
      marginTop: {
        type: String,
        required: false
      },
      faIcon: {
        type: String,
        required: false
      }
    }
  }
</script>
