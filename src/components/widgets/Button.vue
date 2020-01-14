<template>
  <button
          type="button"
          :class="'btn btn-block ' + btnClass"
          v-text="btnText"
          :style="marginTop">

  </button>
</template>
<style>

</style>
<script>
    export default {
      name: 'Button',
      props: ['btnClass', 'btnText', 'marginTop']
    }
</script>
