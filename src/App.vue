<template>
  <div id="app">
    <navigation/>
    <router-view/>
    <mome-footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import MomeFooter from "./components/Footer.vue";
export default {
  name: 'app',
  components: {
    Navigation,
    MomeFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
