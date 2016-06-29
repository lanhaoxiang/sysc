<template lang="pug">
div( :class.once=" $options.name ")
  slot
</template>

<script>
export default {
  name: 'W__Bootstrap_Button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  methods: {
    clickHandler () {
      if (this.args.url) {
        window.location = this.args.url
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/_variables
@import ~bootstrap/scss/_mixins
@import ~bootstrap/scss/_buttons

.W__Bootstrap_Button
  @extend .btn
  @each $type in primary, secondary, info, success, warning, danger
    &.btn-#{$type}
      @extend .btn-#{$type}
    &.btn-#{$type}-outline
      @extend .btn-#{$type}-outline
