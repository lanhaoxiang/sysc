export default {
  '/': controller('effect')
}

/**
 * 创建控制器
 *
 * @param {String} name
 * @param {Object} options
 * @return {Object}
 */

function controller (name, options) {
  return {
    component: resolve => require(['components/layout/Blank'], resolve),
    subRoutes: require(`src/route/modules/${name}`),
    ...options
  }
}
