<template lang="pug">
div( :class.once = `$options.name` )
  header
    | 日期: 周末 && 法定节假日除外<br>
    | 开始: 11:00 pm ~ 11:30 pm<br>
    | 结束: 1:30 am ~ 2:00 am
  div: iframe(
    src = `https://www.livecoding.tv/yozman/embed`,
    allowfullscreen = `true`
  )
  #feedback
    h2 讨论(国内) && 留言(海外)
    iframe( src = `https://fromyb.pubu.im/pub/c/sysc` )
    iframe( src = `https://www.livecoding.tv/yozman/chat` )
</template>

<script>
export default {
  name: 'P__Live_Main',
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve)
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/variables
@import ~bootstrap/scss/mixins
@import ~bootstrap/scss/grid

.P__Live_Main
  @extend .container
  text-align: center
  & > *
    text-align: initial
header
  border: 1px solid
  margin: 1em auto
  display: inline-block
  padding: 1em
  border-radius: .5em
  background: $gray-lightest
header + div
  width: 100%
  position: relative
  &::before
    content: ''
    display: inline-block
    padding-top: 56.25%
    vertical-align: middle
  iframe
    border: none
    position: absolute
    width: 100%
    height: 100%
#feedback
  padding: 1em .5em 10em
  @include clearfix()
  h2
    text-align: center
  iframe
    border: 1px solid
    width: 50%
    height: 50em
    margin-top: 1em
    float: left
    margin-left: -.5em
    &:last-child
      float: right
      margin-right: -.5em
