<template lang="pug">
div( :class.once = `$options.name` )
  table
    thead
      tr
        each th in [ '编号', '描述', '链接' ]
          th= th
    tbody
      tr( v-for = `effect in _list` )
        td {{ effect.key }}
        td {{ effect.title }}
        td
          a( :href = `effect.source` )
            bootstrap-button 源码
          a( v-link = `effect.key` )
            bootstrap-button 预览
</template>

<script>
export default {
  name: 'M__Effect_List',
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve)
  },
  created () {
    this._getList()
  },
  vuex: {
    getters: {
      _list: state => state.repo.effectList
    },
    actions: {
      _getList: require('src/action/repo/getEffectList')
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~bootstrap/scss/variables
@import ~bootstrap/scss/mixins
@import ~bootstrap/scss/tables

table
  @extend .table, .table-bordered
thead
  @extend .thead-default
tbody td
  vertical-align: middle
