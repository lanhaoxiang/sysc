<template lang="pug">
component( :is=" $route.layout || 'blank' ")
</template>

<script>
export default {
  name: 'L__Controller',
  components: {
    'blank': resolve => require(['components/layout/Blank'], resolve),
    'effect': resolve => require(['components/layout/Effect'], resolve)
  }
}
</script>
