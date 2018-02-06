<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to your new project!
        </span>
      </div>

      <div class="right-side">
        <router-link to="/rest">rest</router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>

</style>
