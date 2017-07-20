<template>
  <div>
    <h2>Browsers</h2>
    <search-component @query="handleSearch"></search-component>
    <browser-grid :columns="columns" :data="data"></browser-grid>
  </div>
</template>

<script>
import BrowserGrid from "./BrowserGrid";
import SearchComponent from "../common/SearchComponent";

export default {
  name: "BrowserOverview",
  components: {
    BrowserGrid,
    SearchComponent
  },
  props: {
    browsers: Object
  },
  data () {
    return {
      columns: this.browsers.columns,
      data: this.browsers.data
    };
  },
  methods: {
    handleSearch (value) {
      console.log("BrowserOverview: handle search", value);
    }
  }
};
</script>
