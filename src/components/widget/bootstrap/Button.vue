<template lang="pug">
div(
  :class.once = `$options.name`,
  :type = `type`,
  :outline = `outline`
)
  slot
</template>

<script>
export default {
  name: 'W__Bootstrap_Button',
  props: {
    type: String,
    outline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/variables
@import ~bootstrap/scss/mixins
@import ~bootstrap/scss/buttons

.W__Bootstrap_Button
  @extend .btn
  @each $type in primary, secondary, info, success, warning, danger
    &[type=#{$type}]
      @extend .btn-#{$type}
      &[outline]
        @extend .btn-#{$type}-outline
