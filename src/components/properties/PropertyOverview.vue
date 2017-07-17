<template>
  <div>
    <h2>{{title}}</h2>
    <search-component @query="handleSearch"></search-component>
    <property-grid :data="data"></property-grid>
  </div>
</template>

<script>
import PropertyGrid from "./PropertyGrid";
import SearchComponent from "../common/SearchComponent";

export default {
  name: "PropertyOverview",
  components: {
    PropertyGrid,
    SearchComponent
  },
  props: {
    data: Array,
    title: String
  },
  methods: {
    handleSearch (value) {
      console.log("handle search", value);
    }
  }
};
</script>
