<template>
  <div id="app">
    <img src="./assets/logo.png">
    <span>{{browsers[0].name}}</span>
    <router-view></router-view>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const browserQuery = gql`
    query {
      browsers {
        name
      }
    }
  `

  export default {
    name: 'app',
    data: () => ({
      browsers: []
    }),
    apollo: {
      browsers: {
        query: browserQuery
      }
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
