<template>
  <div class="search-input">
    <input type="search" @keyup="onQuery" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  methods: {
    onQuery (event) {
      this.$emit('query', event.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
