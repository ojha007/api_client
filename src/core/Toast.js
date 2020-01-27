import Vue from 'vue'

export function successToast(message) {
  return Vue.toasted.success(message, {
    theme: 'toasted-primary',
    position: 'bottom-right',
    className: 'text-center',
    duration: 5000,
    icon: 'check_circle'
  })
}

export function errorToastV1(message) {
  return Vue.toasted.error(message, {
    theme: 'toasted-primary',
    position: 'bottom-right',
    className: 'text-center',
    duration: 5000,
    icon: 'error'
  })
}

export function errorToast(error) {
  let errors = Object.values(error.response.data.errors)
  for (let i = 0; i <= errors.length - 1; i++) {
    errorToastV1(errors[i][0])
  }
}

