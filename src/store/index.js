import Vue from 'vue'
import Vuex from 'vuex'
import repo from './repo'
import effect from './effect'

// 加载 vuex 插件
Vue.use(Vuex)

// 定义模块合集
const modules = {
  repo,
  effect
}

// 导出 vuex store
export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
