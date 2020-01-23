import Vue from 'vue'

export function successToast(message) {
  return Vue.toasted.success(message, {
    theme: 'toasted-primary',
    position: 'bottom-right',
    duration: 5000,
    icon: 'check_circle'
  })
}
export function errorToast(message) {
  return Vue.toasted.error(message, {
    theme: 'toasted-primary',
    position: 'bottom-right',
    duration: 5000,
    icon: 'error'
  })
}

