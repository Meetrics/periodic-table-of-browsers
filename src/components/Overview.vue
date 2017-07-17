<template>
  <div class="overview">
    <browser-overview :browsers="browsers"></browser-overview>
    <property-overview :title="'Document Properties'" :data="documentProperties"></property-overview>
    <property-overview :title="'Window Properties'" :data="windowProperties"></property-overview>
  </div>
</template>

<script>
import BrowserOverview from "./browsers/BrowserOverview";
import PropertyOverview from "./common/PropertyOverview";
import mocks from "./mocks";

export default {
  name: "PeriodicTableOfBrowsers",
  components: { BrowserOverview, PropertyOverview },
  data () {
    return {
      documentProperties: mocks.documentProperties,
      windowProperties: mocks.windowProperties,
      browsers: mocks.browsers
    };
  }
};
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
