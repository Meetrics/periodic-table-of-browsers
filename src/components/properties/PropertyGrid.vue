<template>
  <div class="grid">
    <div v-for="property in data">
      <property-cell :property="property"></property-cell>
    </div>
  </div>
</template>

<script>
import PropertyCell from "./PropertyCell";
/**
 * Component for rendering generic browser properties in a table (document and window)
 */
export default {
  name: "PropertyGrid",
  components: { PropertyCell },
  props: {
    data: Array
  }
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
