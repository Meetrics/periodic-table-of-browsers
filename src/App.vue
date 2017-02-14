<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const browsersQuery = gql`
  query {
    browsers {
      name
    }
  }`;

export default {

  data: () => ({
    browsers: []
  }),

  apollo: {
    // Local state 'posts' data will be updated
    // by the GraphQL query result
    browsers: {
      // GraphQL query
      query: browsersQuery,
      // Will update the 'loading' attribute
      // +1 when a new query is loading
      // -1 when a query is completed
      loadingKey: 'loading',
    },
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
