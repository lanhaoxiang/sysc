<template lang="pug">
div(
  :class.once = `$options.name`,
  v-show = `!$loadingRouteData`
)
  a( href = `https://github.com/yozman/sysc` )
    github-corner
  header
    h1 show you sth cool
    div
      a( href = `https://github.com/yozman/sysc/network` )
        bootstrap-button fork: {{ _fork }}
      a( href = `https://github.com/yozman/sysc/stargazers` )
        bootstrap-button star: {{ _star }}
  effect-list
  footer: a(
    v-link.literal = `/live`,
    title = `日期: 周末 && 法定节假日除外\n开始: 11:00 pm ~ 11:30 pm\n结束: 1:30 am ~ 2:00 am`
  )
    bootstrap-button 看直播 &rarr;
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
@import ~bootstrap/scss/variables
@import ~bootstrap/scss/mixins
@import ~bootstrap/scss/grid

.P__Effect_List
  @extend .container
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
footer
  height: 10em
  text-align: center
