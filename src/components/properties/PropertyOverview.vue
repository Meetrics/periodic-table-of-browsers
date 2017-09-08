<template>
  <div>
    <h2>{{title}}</h2>
    <search-component @query="handleSearch"></search-component>
    <property-grid :data="filteredData"></property-grid>
  </div>
</template>

<script>
import PropertyGrid from './PropertyGrid';
import SearchComponent from '../common/SearchComponent';

export default {
  name: 'PropertyOverview',
  components: {
    PropertyGrid,
    SearchComponent
  },
  props: {
    data: Array,
    title: String
  },
  data () {
    return {
      search: ''
    };
  },
  computed: {
    filteredData () {
      return this.data.filter(item => {
        return item.name.toLowerCase().indexOf(this.search) > -1;
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
