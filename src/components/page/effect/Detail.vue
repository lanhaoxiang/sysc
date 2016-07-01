<template lang="pug">
div( :class.once=" [ $options.name, { open: preview } ] "
     v-show=" !$loadingRouteData ")
  header
    h1 {{ _effect.title }}
    div
      a: bootstrap-button 笔记
      a( @click=" preview = true ")
        bootstrap-button 演示
      a( :href=" _effect.source ")
        bootstrap-button 源码
  github-markdown( :content=" _effect.readme ")
  effect-preview( v-show=" preview ",
                  :url=" _effect.preview ",
                  :open.sync=" preview ")
</template>

<script>
export default {
  name: 'P__Effect_Detail',
  route: {
    data ({ next }) {
      this._getEffect({
        id: this.$route.params.num
      }).then(() => next())
    }
  },
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve),
    'github-markdown': resolve => require(['components/widget/github/Markdown'], resolve),
    'effect-preview': resolve => require(['components/module/effect/Preview'], resolve)
  },
  data () {
    return {
      preview: false
    }
  },
  vuex: {
    getters: {
      _effect: state => state.effect
    },
    actions: {
      _getEffect: require('src/action/effect/getEffect')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/_variables
@import ~bootstrap/scss/_mixins
@import ~bootstrap/scss/_grid

.P__Effect_Detail
  @extend .container
  &.open
    height: 0
    overflow: hidden
  header
    height: 400px
    text-align: center
    & + div
      max-width: 910px
      margin: 2em auto
    &:before
      content: ''
      height: 100%
    &:before, h1
      display: inline-block
      vertical-align: middle
    h1 + div
      margin-top: -160px
      &:hover a:before
        transform: scale(0)
        background: none
      a:hover:before
        transform: scaleX(1)
        background: $link-hover-color
    a
      position: relative
      transition: color .3s
      &:first-child:before
        transform: scaleX(1)
        background: $link-color
      &:before
        content: ''
        position: absolute
        left: 17px; right: 17px
        height: 3px; bottom: -9px
        transform: scaleX(0)
        transition: all .3s
