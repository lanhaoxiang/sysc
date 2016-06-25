<template lang="pug">
div( :class.once=" $options.name ", v-show=" !$loadingRouteData ")
  github-corner( :args=" { url: 'https://github.com/yozman/sysc' } ")
  header
    h1 show you sth cool
    div
      bootstrap-button( :args=" { url: 'https://github.com/yozman/sysc/network' } ")
        | fork: {{ _fork }}
      bootstrap-button( :args=" { url: 'https://github.com/yozman/sysc/stargazers' } " )
        | star: {{ _star }}
  effect-list
</template>

<script>
export default {
  name: 'P__Effect_List',
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve),
    'effect-list': resolve => require(['components/module/effect/List'], resolve),
    'github-corner': resolve => require(['components/widget/github/Corner'], resolve)
  },
  route: {
    data ({ next }) {
      this._getRepoInfo().then(() => next())
    }
  },
  vuex: {
    getters: {
      _fork: state => state.repo.fork,
      _star: state => state.repo.star
    },
    actions: {
      _getRepoInfo: require('src/action/modules/getRepoInfo')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/_variables
@import ~bootstrap/scss/_mixins
@import ~bootstrap/scss/_grid

.P__Effect_List
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
