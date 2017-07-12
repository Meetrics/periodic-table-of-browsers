<template>
  <table>
    <tr v-for="row in rows">
      <td v-for="col in row">
        <browser-property-cell :col="col"></browser-property-cell>
      </td>
    </tr>
  </table>
</template>

<script>
import BrowserPropertyCell from './BrowserPropertyCell'
/**
 * Component for rendering generic browser properties in a table (document and window)
 */
export default {
  name: 'BrowserPropertyGrid',
  components: { BrowserPropertyCell },
  props: {
    columnsPerRow: Number,
    data: Array
  },
  computed: {
    rows () {
      let result = []
      let workingArray = []
      let columnsPerRow = this.columnsPerRow || 3

      for (let i = 0; i < this.data.length; i++) {
        if (i % columnsPerRow === 0 || i === this.data.length - 1) {
          result.push(workingArray)
          workingArray = []
        }
        workingArray.push(this.data[i])
      }

      return result
    }
  }
}
</script>
<style scoped>
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
