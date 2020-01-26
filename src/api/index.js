import axios from 'axios'
import config from '../config'
export default {
  request: function (method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }
    if (window.localStorage.getItem('token')) {
      axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token')
    }
    var url = config.serverURI + uri
    return axios({
      method,
      url,
      data
    })
  }
}
