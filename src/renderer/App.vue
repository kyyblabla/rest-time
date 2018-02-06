<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'rest-time',
  mounted() {
    ipcRenderer.on('rest', () => {
      this.$router.push('rest')
    })
    ipcRenderer.on('setting', () => {
      this.$router.push('/')
    })
  }
}
</script>

<style>
/* CSS */
</style>
