<template>
  <div class="browsers">
    <h2>Browsers</h2>
     <search-component @query="handleSearch" :search="search"></search-component>
    <div class="browsers">
      <div class="browsers__list">
        <browser-column v-for="browser in filteredBrowsers"
          :browser="browser"
          :key="browser.name"
          @queryBrowser="handleActualBrowser"></browser-column>
      </div>
    </div>
  </div>
</template>

<script>
import BrowserColumn from './BrowserColumn';
import SearchComponent from '../common/SearchComponent';

export default {
  name: 'BrowserOverview',
  components: {
    SearchComponent,
    BrowserColumn
  },
  props: {
    browsers: Array
  },
  data () {
    return {
      search: ''
    };
  },
  computed: {
    filteredBrowsers () {
      return this.browsers.filter(browser => {
        return browser.name.toLowerCase().indexOf(this.search) > -1;
      });
    }
  },
  methods: {
    handleSearch (value) {
      this.search = value;
    },
    handleActualBrowser (version) {
      this.$emit('queryBrowser', version);
    }
  }
};
</script>

<style>
.browsers__list {
  display: flex;
  list-style-type: none;
  cursor: pointer;
}

.browser__item {
  flex: auto;
}

.browser-versions-list {
  list-style-type: none;
}

.browser__version {
  width: 50px;
  padding: 10px 20px;
  margin-bottom: 7px;
  background-color: #6495ed;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>

