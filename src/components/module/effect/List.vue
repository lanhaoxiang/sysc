<template lang="pug">
div( :class.once=" $options.name ",
     v-html=" _list | marked | scoped ")
</template>

<script>
export default {
  name: 'M__Effect_List',
  created () {
    this._getReadme()
  },
  filters: {
    marked: require('marked'),
    scoped (val) {
      let key = this.$el.attributes[0].name
      return val.replace(
        /(<\w+)([ >])/g,
        (s, s1, s2) => `${s1} ${key}${s2}`
      )
    }
  },
  vuex: {
    getters: {
      _list: state => state.repo.readme
    },
    actions: {
      _getReadme: require('src/action/repo/getReadme')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/_variables
@import ~bootstrap/scss/_mixins
@import ~bootstrap/scss/_tables
@import ~bootstrap/scss/_buttons

.M__Effect_List
  table
    @extend .table, .table-bordered
  thead
    @extend .thead-default
  tbody td
    vertical-align: middle
  tr:hover a
    @extend .btn-primary-outline
  a
    transition: all .3s
    @extend .btn, .btn-sm
