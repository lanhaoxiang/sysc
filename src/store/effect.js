const state = {
  key: '',
  title: '',
  source: '',
  readme: ''
}

const mutations = {
  'effect.setEffect' (state, data) {
    state.key = data.name
    state.title = data.description
    state.source = data.html_url
  },
  'effect.setReadme' (state, { content, encoding }) {
    switch (encoding) {
      case 'base64':
        state.readme = decodeURIComponent(escape(window.atob(content)))
        break
    }
  }
}

export default {
  state,
  mutations
}
