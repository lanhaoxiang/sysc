// repo 模块状态
const state = {
  fork: 0,
  star: 0,
  readme: ''
}

// repo 状态触发器
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

// 导出 repo 模块
export default {
  state,
  mutations
}
