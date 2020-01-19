<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            This is the default tile!

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
<!--  <div class="modal" tabindex="-1" role="dialog">-->
<!--    <div class="modal-dialog" role="document">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h5 class="modal-title" v-text="title"></h5>-->
<!--&lt;!&ndash;          <button type="button" class="close" data-dismiss="modal" aria-label="Close">&ndash;&gt;-->
<!--&lt;!&ndash;            <span aria-hidden="true">&times;</span>&ndash;&gt;-->
<!--&lt;!&ndash;          </button>&ndash;&gt;-->
<!--          <button-->
<!--            type="button"-->
<!--            class="btn-close"-->
<!--            @click="close"-->
<!--          >-->
<!--            x-->
<!--          </button>-->
<!--        </div>-->
<!--        <slot name="modal-body">-->
<!--        </slot>-->
<!--        <div class="modal-footer">-->
<!--          <button type="button" class="btn btn-primary">Save</button>-->
<!--          <button-->
<!--            type="button"-->
<!--            class="btn-green"-->
<!--            @click="close"-->
<!--          >-->
<!--            Close me!-->
<!--          </button>-->
<!--&lt;!&ndash;          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script>
    export default {
      name: 'Modal',
      props: {
        title: {
          type: String,
          required: true
        }
      },
      methods: {
        close() {
          this.$emit('close')
        }
      }
    }
</script>
