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

<style lang="sass">
#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    text-align: center
    color: #2c3e50
    display: grid
    justify-content: center
    grid-template-rows: 10% 1fr 10%
    height: 100vh
a
    color: #2c3e50
.btn
    border: 2px solid black
    text-decoration: none
    padding: .5rem
    background-color: white
    display: inline-block
.hide
    display: none
</style>
