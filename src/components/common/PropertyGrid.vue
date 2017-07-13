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
import PropertyCell from './PropertyCell'
/**
 * Component for rendering generic browser properties in a table (document and window)
 */
export default {
  name: 'PropertyGrid',
  components: { PropertyCell },
  props: {
    columnsPerRow: Number,
    data: Array
  },
  computed: {
    rows () {
      let result = []
      let columnsPerRow = this.columnsPerRow || 3

      for (let i = 0; i < this.data.length; i += columnsPerRow) {
        result.push(this.data.slice(i, i + this.columnsPerRow))
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
