const state = {
  fork: 0,
  star: 0,
  readme: ''
}

const mutations = {
  'repo.setForkAndStar' (state, { fork, star }) {
    state.fork = fork
    state.star = star
  },
  'repo.setReadme' (state, { content, encoding }) {
    switch (encoding) {
      case 'base64':
        state.readme = decodeURIComponent(escape(window.atob(content)))
        break
    }
  }
}

module.exports = {
  state,
  mutations
}
