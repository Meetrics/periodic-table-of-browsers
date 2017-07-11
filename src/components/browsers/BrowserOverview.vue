<template>
  <div>
    <search-component @query="handleSearch"></search-component>
    <browser-grid :columns="columns" :data="data"></browser-grid>
  </div>
</template>

<script>
import BrowserGrid from './BrowserGrid'
import SearchComponent from '../common/SearchComponent'

export default {
  name: 'BrowserOverview',
  components: {
    BrowserGrid,
    SearchComponent
  },
  data () {
    return {
      columns: ['internetexplorer', 'chrome', 'firefox', 'opera', 'edge'],
      data: [
        [6, 7, 8, 9, 10, 11],
        [46, 47, 48, 49, 50],
        [20, 21, 22, 23, 24],
        [1, 2, 3, 4, 5],
        [12, 13, 14, 15, 16]
      ]
    }
  },
  methods: {
    handleSearch (value) {
      console.log('handle search', value)
    }
  }
}
</script>
