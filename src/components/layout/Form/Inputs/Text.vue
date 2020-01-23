<template>
  <input
    :autocomplete="autocomplete"
    :autofocus="autoFocus"
    :class="groups"
    :id="identity"
    :maxlength="maxLength"
    :name="name"
    :placeholder="placeholder"
    type="text"
    v-on="inputListeners"
  >
</template>
<script>
  export default {
    name: 'Text',
    props: {
      groups: {
        type: String,
        required: false
      },
      // class: {
      //   type: String,
      //   required: true
      // },
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: false
      },
      value: {
        default: ''
      },
      currentValue: {
        default: ''
      },
      placeholder: {
        type: String,
        required: false
      },
      autoFocus: {
        type: Boolean,
        required: false
      },
      maxLength: {
        type: Number,
        required: false
      },
      autocomplete: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        identity: this.id ? this.id : this.name
      }
    },
    computed: {
      inputListeners() {
        return Object.assign({}, this.$listeners, {
          input: event => {
            this.emit(event.target.value)
          }
        })
      }
    },
    mounted() {
      this.emit(this.currentValue)
    },
    methods: {
      emit(value) {
        return this.$emit('input', value)
      }
    }
  }
</script>
