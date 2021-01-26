<template>
  <div class="app">
    <router-view :key="key"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      key: 'value',
      data: {
        row: [],
        el: []
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log(this.data)
    }
  }
}
</script>

<style lang="less">
[v-cloak] {
  display: none;
}

.app {
  width: 100%;
  height: 100vh;
}

html, body, #app {
  width: 100%;
  height: 100vh;
}
</style>
