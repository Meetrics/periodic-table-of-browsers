<template>
  <div class="browser__item">
    <div class="browser__name">{{name}}</div>
    <ul class="browser-versions-list">
      <browser-version v-for="version in versions"
        :version="version"
        :key="version.id"
        @queryVersion="handleActualVersion"></browser-version>
    </ul>
  </div>
</template>

<script>
import BrowserVersion from './BrowserVersion';

export default {
  name: 'BrowserColumn',
  components: {
    BrowserVersion
  },
  props: {
    browser: Object
  },
  data () {
    return {
      name: this.browser.name,
      versions: this.browser.versions
    };
  },
  methods: {
    handleActualVersion (version) {
      this.$emit('queryBrowser', version);
    }
  }
};
</script>

<style scoped>
.browser__item {
  flex: auto;
}

.browser-versions-list {
  list-style-type: none;
}
</style>

