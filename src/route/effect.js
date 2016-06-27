// list 映射
const list = {
  name: 'effect/list',
  component: resolve => require(['components/page/effect/List'], resolve)
}

// detail 映射
const detail = {
  name: 'effect/detail',
  layout: 'effect',
  component: resolve => require(['components/page/effect/Detail'], resolve)
}

// 导出 effect 控制器
export default {
  '/': list,
  '/:num': detail
}
