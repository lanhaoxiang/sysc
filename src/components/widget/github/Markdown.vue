<template lang="pug">
div(
  :class.once = `$options.name`,
  v-html = `content | marked | scoped`
)
</template>

<script>
export default {
  name: 'W__Github_Markdown',
  props: {
    content: String
  },
  filters: {
    marked: require('marked'),
    scoped (val) {
      let scoped = this.$el.attributes[0].name
      return val.replace(
        /(<[^/>]+)([ >])/g,
        (s, s1, s2) => `${s1} ${scoped}${s2}`
      )
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~primer-markdown/lib/markdown-body
@import ~primer-markdown/lib/headings
@import ~primer-markdown/lib/lists
@import ~primer-markdown/lib/tables
@import ~primer-markdown/lib/images
@import ~primer-markdown/lib/code

.W__Github_Markdown
  font-family: inherit
  @extend .markdown-body
