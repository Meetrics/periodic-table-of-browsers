<template>
  <span>
    <span class="title">{{col.name}}:</span>
    <span>{{col.type}}</span>
  </span>
</template>
<script>
export default {
  name: 'PropertyCell',
  props: {
    col: Object
  }
}
</script>
<style scoped>
.title {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
