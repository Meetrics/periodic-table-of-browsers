<template>
  <div class="search-input">
    <input type="search" v-model="query" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      query: ''
    };
  },
  watch: {
    query (query) {
      this.$emit('query', query);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
