import { request } from '../http'

module.exports = ({ dispatch }, data) =>
  request(`https://api.github.com/repos/sth-cool/${data.id}/contents/README.md`)
    .get()
    .then(response => {
      response.ok &&
        dispatch('effect.setReadme', {
          content: response.data.content,
          encoding: response.data.encoding
        })
      return response
    })
