<template>
  <div class="version">{{col}}</div>
</template>
<script>
export default {
  name: 'BrowserCell',
  props: {
    col: String
  }
}
</script>
<style scoped>
.version {
  width: 50px;
  padding: 10px 20px;
  background-color: #6495ed;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>
