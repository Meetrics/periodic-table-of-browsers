<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/logo.png">
        <span class="title">Periodic Table of Browsers</span>
      </div>
    </div>
    <div id="content">
      <browser-overview :browsers="browsersUniq" @queryBrowser="handleActualBrowser"></browser-overview>
      <router-view :browserId="browserId"></router-view>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag';
  import BrowserOverview from './components/browsers/BrowserOverview';

  const browserQuery = gql`
    query {
      browsersUniq {
        name
        versions {
          id
          version
        }
      }
    }
  `;

  export default {
    name: 'app',
    data: () => ({
      browsersUniq: [],
      browserId: null
    }),
    components: { BrowserOverview },
    methods: {
      handleActualBrowser (browserId) {
        this.browserId = browserId;
      }
    },
    apollo: {
      browsersUniq: {
        query: browserQuery
      }
    }
  };
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
</style>
