<template>
  <div id="app">
    <!-- <state-eg></state-eg> -->
    <getter-eg></getter-eg>
  </div>
</template>

<script>
import StateEgVue from './components/1-StateEg.vue';
import GetterEgVue from './components/2-GetterEg.vue';

export default {
  name: 'App',
  components: {
    'state-eg': StateEgVue,
    'getter-eg': GetterEgVue,
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
