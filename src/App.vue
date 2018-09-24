<template>
  <div id="app">
    <!-- <state-eg></state-eg> -->
    <!-- <getter-eg></getter-eg> -->
    <!-- <mutation-eg></mutation-eg> -->
    <!-- <action-eg></action-eg> -->
    <favorite-movie></favorite-movie>
  </div>
</template>

<script>
import StateEgVue from './components/1-StateEg.vue';
import GetterEgVue from './components/2-GetterEg.vue';
import MutationEgVue from './components/3-MutationEg.vue';
import ActionEgVue from './components/4-ActionEg.vue';
import FavoriteMovieVue from './components/FavoriteMovie.vue';

export default {
  name: 'App',
  components: {
    'state-eg': StateEgVue,
    'getter-eg': GetterEgVue,
    'mutation-eg': MutationEgVue,
    'action-eg': ActionEgVue,
    'favorite-movie': FavoriteMovieVue
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
