// main 映射
const main = {
  name: 'live/main',
  component: resolve => require(['components/page/live/Main'], resolve)
}

// 导出 live 控制器
export default {
  '/': main
}
