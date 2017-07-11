<template>
  <table>
    <thead>
      <th v-for="key in columns">{{key | capitalize}}</th>
    </thead>
    <tbody>
      <tr v-for="row in columns">
        <td class="version" v-for="value in columns[row]">{{value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BrowserGrid',
  props: {
    columns: Array,
    data: Array,
    query: String
  },
  filters: {
    capitalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.version {

}
</style>
