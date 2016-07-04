<template lang="pug">
div( :class.once = `$options.name` )
  bootstrap-button#close(
    @click = `open = false`,
    type = `secondary`,
    outline = true
  ) 关闭演示
  iframe( :src = `url` )
</template>

<script>
export default {
  name: 'M__Effect_Preview',
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve)
  },
  props: {
    url: String,
    open: {
      type: Boolean,
      twoWay: true
    }
  }
}
</script>

<style lang="sass" scoped>
.M__Effect_Preview
  position: absolute
  top: 0; right: 0; bottom: 0; left: 0
  overflow: hidden
  background: #fff
  z-index: 1
iframe
  width: 100%; height: 100%
  border: 0
#close
  position: absolute
  top: 1em; left: 1em
