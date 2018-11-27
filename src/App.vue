<template>
    <div id="app">
        <navigation/>
        <router-view/>
    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
    name: 'app',
    components: {
        Navigation
    }
}
</script>

<style lang="sass">

// #3565a6
// #3c74a4
// #327563
// #76a564
// #bebb60

$primary: #327563
$secondary: #76a564

body
    margin: 0
    background-color: #f8f5de
    background: url('/img/background.jpg')
    min-height: 100vh
    font-size: 1.5rem
#app
    font-family: 'Almendra', cursive
    text-align: center
    color: #2c3e50
    display: grid
    grid-template-rows: auto 1fr auto
    grid-template-columns: minmax(200px, 1040px)
    grid-template-areas: 'nav' 'area' 'f'
    grid-column-gap: 5rem

    nav
        grid-area: nav
    .game
        grid-area: area
    footer
        grid-area: f
a
    color: #2c3e50
    text-decoration: none

input, button, a
    font-family: 'Almendra', cursive

input:disabled
    color: #AEAC99
    border-color: #AEAC99

.btn
    color: white
    text-decoration: none
    padding: .75rem
    margin: .75rem
    background-color: $primary
    display: inline-block
    font-size: 1.5rem
    border-radius: 1rem
    &:hover
        background-color: $secondary

.hide
    display: none

div#midiPlayer_div
    display: none
</style>
