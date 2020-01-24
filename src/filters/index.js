const urlParser = document.createElement('a')

export function domain(url) {
  urlParser.href = url
  return urlParser.hostname
}

export function count(arr) {
  return arr.length
}

export function prettyDate(date) {
  var a = new Date(date)
  return a.toDateString()
}

export function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }

  return time + label + 's'
}

export function formValidated(form) {
  console.log(form)
  // return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).some(key => this.fields[key].valid)
}
