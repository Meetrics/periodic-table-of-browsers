<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  var client = require('graphql-client')({
    url: 'http://localhost:8080/graphql',
    headers: {}
  })

  client.query(`
  query {
    browsers{
      name
    }
  }`).then(function (body) {
    console.log(body)
  })

  export default {
    name: 'app'
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
