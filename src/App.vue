<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/logo.png">
        <span class="title">Periodic Table of Browsers</span>
      </div>
    </div>
    <div id="content">
      <router-view></router-view>
      <div class="browsers">
        <ul class="browsers__list">
      <li v-for="browser in browsers">{{browser.name}}</li>
      </ul>
      </div>
    </div>
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
  color: #2c3e50;
}

#content {
  text-align: center;
  margin-top: 60px;
}

.logo img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}

.logo .title {
  font-size: 1.5em;
  vertical-align: text-top;
}

.browsers__list {
  list-style-type: none;
  cursor: pointer;
}
</style>
