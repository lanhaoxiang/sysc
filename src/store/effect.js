const state = {
  key: '',
  title: '',
  source: '',
  preview: '',
  readme: ''
}

const mutations = {
  'effect.setEffect' (state, data) {
    state.key = data.name
    state.title = data.description
    state.source = data.html_url
    state.preview = data.homepage
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
