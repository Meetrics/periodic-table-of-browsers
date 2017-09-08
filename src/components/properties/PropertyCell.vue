<template>
  <span>
    <span class="title">{{property.name}}:</span>
    <span>{{property.type}}</span>
  </span>
</template>
<script>
export default {
  name: 'PropertyCell',
  props: {
    property: Object
  }
};
</script>
<style scoped>
.title {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
