<template>
  <div id="app">
    <state-eg></state-eg>
  </div>
</template>

<script>
import StateEg from './components/1-StateEg'

export default {
  name: 'App',
  components: {
    'state-eg': StateEg
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
