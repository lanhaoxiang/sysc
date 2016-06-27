import Vue from 'vue'
import Vuex from 'vuex'
import repo from './repo'

// 加载 vuex 插件
Vue.use(Vuex)

// 定义模块合集
const modules = {
  repo
}

// 导出 vuex store
export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
