// repo 模块状态
const state = {
  fork: 0,
  star: 0,
  readme: '',
  active: {
    title: '',
    content: ''
  }
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
  },
  'repo.setActive' (state, { content, encoding }) {
    state.active.title = content.substr('18')
    switch (encoding) {
      case 'base64':
        state.active.content = decodeURIComponent(escape(window.atob(content)))
    }
  }
}

// 导出 repo 模块
export default {
  state,
  mutations
}
