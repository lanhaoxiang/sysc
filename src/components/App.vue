<template lang="pug">
div( :class.once = `$options.name` )
  router-view
</template>

<script>
export default {
  name: 'App',
  created () {
    // 绑定网络请求开始
    window.beforeRequest = this.beforeRequest
    // 绑定网络请求结束
    window.afterResponse = this.afterResponse
  },
  methods: {
    beforeRequest: () => console.log('请求开始'),
    afterResponse: () => console.log('请求结束')
  }
}
</script>

<style lang="scss" src="bootstrap/scss/bootstrap-reboot.scss"></style>
<style lang="sass" scoped>
.App
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif
