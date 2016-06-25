import Vue from 'vue'
import Vuex from 'vuex'

// 加载 vuex 插件
Vue.use(Vuex)

// 定义模块合集
const modules = {}

// 循环添加所有模块
// TODO: 遍历文件
'repo'.replace(/\w+/, (s) => {
  modules[s] = require(`./modules/${s}`)
})

// 导出 vuex store
export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
