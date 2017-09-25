<template>
  <div class="browsers">
    <h2>Browsers</h2>
     <search-component @query="handleSearch" :search="search"></search-component>
    <div class="browsers">
      <div class="browsers__list">
        <browser-column v-for="browser in filteredBrowsers"
          :browser="browser"
          :key="browser.name"></browser-column>
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
    }
  }
};
</script>

<style scoped>
.browsers__list {
  display: flex;
  list-style-type: none;
  cursor: pointer;
}
</style>

