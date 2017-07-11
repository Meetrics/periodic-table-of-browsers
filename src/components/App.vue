<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <browser-overview></browser-overview>
  </div>
</template>

<script>
import BrowserOverview from './browsers/BrowserOverview'

export default {
  name: 'PeriodicTableOfBrowsers',
  data () {
    return {
      msg: 'Welcome to the Periodic Table of Browsers Project'
    }
  },
  components: { BrowserOverview }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #ee7202
}
</style>
