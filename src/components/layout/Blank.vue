<template lang="pug">
component( :is=" $route.layout ", v-if=" $route.layout ")
div( :class.once=" $options.name ", v-else)
  router-view
</template>

<script>
export default {
  name: 'L__Blank',
  components: {
    'effect': resolve => require(['components/layout/Effect'], resolve)
  }
}
</script>
