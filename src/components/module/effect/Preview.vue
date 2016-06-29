<template lang="pug">
div( :class.once=" $options.name ")
  button( @click=" open = false ") &times;
  iframe( :src=" url ")
</template>

<script>
export default {
  name: 'M__Effect_Preview',
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
@import ~bootstrap/scss/_variables
@import ~bootstrap/scss/_mixins
@import ~bootstrap/scss/_close

.M__Effect_Preview
  position: absolute
  top: 0; right: 0; bottom: 0; left: 0
  overflow: hidden
  background: #fff
iframe
  width: 100%; height: 100%
  border: 0
button
  position: absolute
  top: $spacer; left: $spacer
  @extend .close
