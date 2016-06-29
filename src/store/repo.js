// repo 模块状态
const state = {
  fork: 0,
  star: 0,
  readme: '',
  effectList: []
}

// repo 状态触发器
const mutations = {
  'repo.setForkAndStar' (state, { fork, star }) {
    state.fork = fork
    state.star = star
  },
  'repo.setEffectList' (state, data) {
    let effectList = []
    data.forEach(effect => {
      effectList.push({
        key: effect.name,
        title: effect.description,
        source: effect.html_url
      })
    })
    state.effectList = effectList
  }
}

// 导出 repo 模块
export default {
  state,
  mutations
}
