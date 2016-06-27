import Effect from './effect'

// effect 控制器
const effect = {
  subRoutes: Effect,
  component: resolve => require(['components/layout/Controller'], resolve)
}

// 导出路由
export default {
  '/': effect
}
