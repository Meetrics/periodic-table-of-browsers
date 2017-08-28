<template>
  <li class="browser__version"
    @click="actualiseData($event, vId)"
    :class="{ 'browser__version--active': isActive }"
    :key="vId">
      {{vNumber}}
  </li>
</template>

<script>

export default {
  name: 'BrowserVersion',
  props: {
    version: Object
  },
  data () {
    return {
      isActive: false,
      vId: this.version.id,
      vNumber: this.version.version
    };
  },
  methods: {
    actualiseData (e, version) {
      this.isActive = !this.isActive;
      this.$emit('queryVersion', this.isActive ? version : null);
    }
  }
};
</script>

<style>
.browser__version {
  width: 50px;
  padding: 10px 20px;
  margin-bottom: 7px;
  background-color: #6495ed;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}

.browser__version--active {
  background-color: #007f00;
}
</style>

