<template lang="pug">
div( :class.once=" $options.name "
     v-show=" !$loadingRouteData ")
  a( href=" https://github.com/yozman/sysc ")
    github-corner
  header
    h1 show you sth cool
    div
      a( href=" https://github.com/yozman/sysc/network ")
        bootstrap-button fork: {{ _fork }}
      a( href=" https://github.com/yozman/sysc/stargazers ")
        bootstrap-button star: {{ _star }}
  effect-list
</template>

<script>
export default {
  name: 'P__Effect_List',
  route: {
    data ({ next }) {
      this._getRepoInfo().then(() => next())
    }
  },
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve),
    'effect-list': resolve => require(['components/module/effect/List'], resolve),
    'github-corner': resolve => require(['components/widget/github/Corner'], resolve)
  },
  vuex: {
    getters: {
      _fork: state => state.repo.fork,
      _star: state => state.repo.star
    },
    actions: {
      _getRepoInfo: require('src/action/repo/getRepoInfo')
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
    & + div
      max-width: 910px
    &:before
      content: ''
      height: 100%
    &:before, h1
      display: inline-block
      vertical-align: middle
    h1 + div
      margin-top: -160px
