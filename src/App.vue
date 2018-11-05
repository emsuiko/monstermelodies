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
body
    margin: 0
    background-color: #f8f5de
    background-image: linear-gradient(to right, rgba(255,210,0,0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0,0,0,0) 35%, rgba(200, 160, 0, 0.1) 65%)
    box-shadow: inset 0 0 75px rgba(255,210,0,0.3), inset 0 0 20px rgba(255,210,0,0.4), inset 0 0 30px rgba(220,120,0,0.8)
    min-height: 100vh
#app
    font-family: 'Uncial Antiqua', cursive
    text-align: center
    color: #2c3e50
    display: grid
    justify-content: center
    grid-template-rows: auto 1fr auto
    grid-template-columns: 1fr
    min-height: 100vh;
a
    color: #2c3e50
    text-decoration: none

input, button, a
    font-family: 'Uncial Antiqua', cursive

.btn
    border: 2px solid #2F4858
    text-decoration: none
    padding: .75rem
    margin: .75rem
    background-color: #C5D2BD
    display: inline-block
    font-size: 1.5rem
    border-radius: 1rem

.hide
    display: none
</style>
