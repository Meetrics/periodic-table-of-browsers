<template>
  <div>
    <table>
      <thead>
        <th v-for="key in columns">{{key | capitalize}}</th>
      </thead>
      <tbody>
        <tr v-for="row in data">
          <td v-for="col in row" v-if="col">
            <browser-cell :col="col"></browser-cell>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BrowserCell from './BrowserCell'

export default {
  name: 'BrowserGrid',
  components: {
    BrowserCell
  },
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
.version, td {
  font-size: 1.4em;
  text-align: center;
  vertical-align: middle;
}
table {
  border-spacing: 10px;
  border-collapse: separate;
  margin-left: auto;
  margin-right: auto;
}

th, td {
  padding: 10px;
}
</style>
