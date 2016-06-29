import { request } from '../http'
import getNote from './getNote'

module.exports = ({ dispatch }, data) =>
  request(`https://api.github.com/repos/sth-cool/${data.id}`)
    .get()
    .then(response => {
      response.ok &&
        dispatch('effect.setEffect', response.data)
      getNote({ dispatch }, data)
      return response
    })
