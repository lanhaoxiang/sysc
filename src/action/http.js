import Vue from 'vue'
import Resource from 'vue-resource'

// 加载 vue-resource 插件
Vue.use(Resource)

// 设置请求参数
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.options.root = '/index.php'

// 添加自定义请求头
Vue.http.headers.common['Authorization'] = 'token aa8885545f0a3d7ed7c155843a59fa2aa37efa2f'

// 设定请求开始与结束的钩子
Vue.http.interceptors.push((request, next) => {
  // 请求开始
  window.beforeRequest &&
    window.beforeRequest()
  // 接收响应
  next(response => {
    window.afterResponse &&
      window.afterResponse()
  })
})

// 普通的 GET, POST 方法
export const request = url => {
  let request = Vue.http
  return {
    get: data =>
      response.call(request.get(url, data)),
    post: data =>
      response.call(request.post(url, data))
  }
}

// 资源 restful 方法
export const resource = name => {
  let request = Vue.resource(`resources/${name}/id`)
  return {
    index: data =>
      response.call(request.query(data)),
    create: args => args,
    store: data =>
      response.call(request.save(data)),
    show: data =>
      response.call(request.get({ ...data, id: data.id || 0 })),
    edit: args => args,
    update: data =>
      response.call(request.update({ id: data.id || 0 }, data)),
    destroy: data =>
      response.call(request.delete({ id: data.id || 0 }, data))
  }
}

// 请求响应 Promise 统一管理
function response () {
  return this.then(
    success => success,
    error => error
  )
}
