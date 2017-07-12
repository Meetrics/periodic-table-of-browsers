<template>
  <div class="overview">
    <browser-overview :browsers="browsers"></browser-overview>
    <browser-property-overview :title="'Document Properties'" :data="documentProperties"></browser-property-overview>
    <browser-property-overview :title="'Window Properties'" :data="documentProperties"></browser-property-overview>
  </div>
</template>

<script>
import BrowserOverview from './browsers/BrowserOverview'
import BrowserPropertyOverview from './common/BrowserPropertyOverview'
import mocks from './mocks'

export default {
  name: 'PeriodicTableOfBrowsers',
  components: { BrowserOverview, BrowserPropertyOverview },
  data () {
    return {
      documentProperties: mocks.documentProperties,
      windowProperties: mocks.windowProperties,
      browsers: mocks.browsers
    }
  }
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
