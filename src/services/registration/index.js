import axios from 'axios'

export default {
  /**
   * Register a new user
   * @param {Object} detail registration detail
   */
  register (detail) {
    return new Promise((resolve, reject) => {
      axios.post('/registrations', detail).then(({data}) => { // detail에 요청 정보를 담아 전송
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
