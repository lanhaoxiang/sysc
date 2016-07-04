import Effect from './effect'
import Live from './live'

// effect 控制器
const effect = {
  subRoutes: Effect,
  component: resolve => require(['components/layout/Controller'], resolve)
}

// live 控制器
const live = {
  subRoutes: Live,
  component: resolve => require(['components/layout/Controller'], resolve)
}

// 导出路由
export default {
  effect,
  live
}
