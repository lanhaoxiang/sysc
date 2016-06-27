import { request } from '../http'

module.exports = ({ dispatch }, data) =>
  request('https://api.github.com/repos/yozman/sysc/contents/README.md')
    .get({
      ref: data.id
    })
    .then(response => {
      response.ok &&
        dispatch('repo.setReadme', {
          content: response.data.content,
          encoding: response.data.encoding
        })
      return response
    })
