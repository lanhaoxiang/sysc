import { request } from '../http'

module.exports = ({ dispatch }, data) =>
  request('https://api.github.com/orgs/sth-cool/repos')
    .get(data)
    .then(response => {
      response.ok &&
        dispatch('repo.setEffectList', response.data)
      return response
    })
