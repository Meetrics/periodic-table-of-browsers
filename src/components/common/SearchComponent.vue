<template>
  <div class="search-input">
    <input type="search" v-model="searchQuery" @keyup="onQuery" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data () {
    return {
      searchQuery: ""
    };
  },
  methods: {
    onQuery (event) {
      this.$emit("query", this.searchQuery);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
