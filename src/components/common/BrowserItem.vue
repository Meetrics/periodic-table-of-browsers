<template>
  <div class="component">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "BrowserProperty",
  data () {
    return {
      name: "getComputedStyle",
      type: "Function"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
