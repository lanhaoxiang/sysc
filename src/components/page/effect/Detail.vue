<template lang="pug">
div( :class.once=" $options.name "
     v-show=" !$loadingRouteData ")
  header
    h1 {{ _title }}
    div
      a
        bootstrap-button 笔记
      a( @click=" preview ")
        bootstrap-button 演示
      a( :href=" `https://github.com/yozman/sysc/tree/${ $route.params.num }` ")
        bootstrap-button 源码
  github-markdown( :content=" _content ")
</template>

<script>
export default {
  name: 'P__Effect_Detail',
  route: {
    data ({ next }) {
      this._getNote({
        id: this.$route.params.num
      }).then(() => next())
    }
  },
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve),
    'github-markdown': resolve => require(['components/widget/github/Markdown'], resolve)
  },
  methods: {
    preview () {
    }
  },
  vuex: {
    getters: {
      _title: state => state.repo.active.title,
      _content: state => state.repo.active.content
    },
    actions: {
      _getNote: require('src/action/effect/getNote')
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
  header
    height: 400px
    text-align: center
    &:before
      content: ''
      height: 100%
    &:before, h1
      display: inline-block
      vertical-align: middle
    h1 + div
      margin-top: -160px
    a
      position: relative
      transition: color .3s
      &:hover:before
        transform: scaleX(1)
        background: $link-hover-color
      &:before
        content: ''
        position: absolute
        left: 17px; right: 17px
        height: 3px; bottom: -9px
        transform: scaleX(0)
        transition: all .3s
