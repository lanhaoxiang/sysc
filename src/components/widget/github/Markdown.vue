<template lang="pug">
div( :class.once=" $options.name "
     v-html=" content | marked ")
</template>

<script>
export default {
  name: 'W__Github_Markdown',
  props: {
    content: String
  },
  filters: {
    marked: require('marked')
  }
}
</script>
