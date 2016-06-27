import { request } from '../http'

module.exports = ({ dispatch }, data) =>
  request('https://api.github.com/repos/yozman/sysc')
    .get(data)
    .then(response => {
      response.ok &&
        dispatch('repo.setForkAndStar', {
          fork: response.data.forks_count,
          star: response.data.stargazers_count
        })
      return response
    })
