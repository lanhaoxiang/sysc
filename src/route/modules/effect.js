module.exports = {
  '/': {
    name: 'effect/list',
    component: resolve => require(['components/page/effect/List'], resolve)
  },
  '/:num': {
    name: 'effect/detail',
    layout: 'effect',
    component: resolve => require(['components/page/effect/Detail'], resolve)
  }
}
