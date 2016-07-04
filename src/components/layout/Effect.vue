<template lang="pug">
div( :class.once = `$options.name` )
  router-view
  a( v-link.literal = `/` )
    bootstrap-button#back(
      type = `primary`,
      outline = true
    ) 返回列表
</template>

<script>
export default {
  name: 'L__Effect',
  components: {
    'bootstrap-button': resolve => require(['components/widget/bootstrap/Button'], resolve)
  }
}
</script>

<style lang="sass" scoped>
#back
  position: fixed
  left: 1em; top: 1em
