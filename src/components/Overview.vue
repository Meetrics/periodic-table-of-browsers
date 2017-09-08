<template>
  <div class="overview">
    <property-overview :title="'Document Properties'" :data="filteredDocumentProps"></property-overview>
    <property-overview :title="'Window Properties'" :data="filteredWindowProps"></property-overview>
  </div>
</template>

<script>
import { WINDOW_PROPS_QUERY,
  DOCUMENT_PROPS_QUERY,
  BROWSER_HAS_WINDOW_PROPS_QUERY,
  BROWSER_HAS_DOC_PROPS_QUERY } from '../utils/queries';
import BrowserOverview from './browsers/BrowserOverview';
import PropertyOverview from './properties/PropertyOverview';

export default {
  name: 'PeriodicTableOfBrowsers',
  components: { BrowserOverview, PropertyOverview },
  props: {
    browserId: String
  },
  data () {
    return {
      documentProperties: [],
      windowProperties: [],
      browsers_has_WindowProperties: [],
      browsers_has_DocumentProperties: []
    };
  },
  computed: {
    filteredWindowProps () {
      if (this.browsers_has_WindowProperties.length) {
        let arrayOfPropsIds = this.browsers_has_WindowProperties.map(prop => prop.WindowProperties_id);
        return this.windowProperties.filter(prop => arrayOfPropsIds.indexOf(+prop.id) !== -1);
      } else {
        return this.windowProperties;
      }
    },
    filteredDocumentProps () {
      if (this.browsers_has_DocumentProperties.length) {
        let arrayOfPropsIds = this.browsers_has_DocumentProperties.map(prop => prop.DocumentProperties_id);
        return this.documentProperties.filter(prop => arrayOfPropsIds.indexOf(+prop.id) !== -1);
      } else {
        return this.documentProperties;
      }
    }
  },
  apollo: {
    windowProperties: {
      query: WINDOW_PROPS_QUERY
    },
    documentProperties: {
      query: DOCUMENT_PROPS_QUERY
    },
    browsers_has_WindowProperties: {
      query: BROWSER_HAS_WINDOW_PROPS_QUERY,
      variables () {
        return {
          browserId: this.browserId
        };
      }
    },
    browsers_has_DocumentProperties: {
      query: BROWSER_HAS_DOC_PROPS_QUERY,
      variables () {
        return {
          browserId: this.browserId
        };
      }
    }
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
