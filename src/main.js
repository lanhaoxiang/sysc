import Vue from 'vue'
import Router from 'vue-router'
import App from 'components/App'
import store from 'src/store'
import route from 'src/route'

// 加载路由插件
Vue.use(Router)

// 新建路有对象
const router = new Router()

// 绑定路由规则
router.map(route)

// 开始路由系统
router.start({ ...App, store }, 'app')
