<template>
  <div>
    <h2>{{title}}</h2>
    <search-component @query="handleSearch"></search-component>
    <browser-property-grid :data="data"></browser-property-grid>
  </div>
</template>

<script>
import BrowserPropertyGrid from './BrowserPropertyGrid'
import SearchComponent from '../common/SearchComponent'

export default {
  name: 'BrowserPropertyOverview',
  components: {
    BrowserPropertyGrid,
    SearchComponent
  },
  props: {
    data: Array,
    title: String
  },
  methods: {
    handleSearch (value) {
      console.log('handle search', value)
    }
  }
}
</script>
