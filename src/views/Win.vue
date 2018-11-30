<template lang="pug">
    div.win
        h3 Juhu, du hast gewonnen!
        p
            vue-typer(
                    :text='["Das letzte Monster klimperte kurz mit den Augen und fiel dann schnarchend in sich zusammen. Plötzlich war Bartholomäus so erleichtert wie nie zuvor in seinem Leben. Hinter dem Monster, am Rande der Waldlichtung, drehte sich ein wunderschönes Kleid im Wind. Mit diesem Geschenk würde Spundita ihm hold sein. Dessen war sich unser Held nun ganz gewiss."]'
                    :repeat='0'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='250'
                    erase-style='clear'
                    :erase-on-complete='false'
                    caret-animation='blink')
        .dress
        .info
            strong Blaues Gesellschaftskleid, Nachmittagskleid, aus Taille und Rock mit seitlicher Draperie
            br
            | um 1887

        div
            router-link(to="/game" class="btn") Nochmal Spielen
</template>

<script>
var VueTyper = require('vue-typer').VueTyper
export default {
    components: {
        VueTyper
    }
}
</script>

<style scoped lang="sass">
.win
    display: grid
    grid-template-rows: repeat(3, auto)
    grid-template-columns: 1

@keyframes play
    100%
        background-position: -1888px

.dress
    justify-self: center
    width: 236px
    height: 354px
    background: url('/img/blaues-kleid.jpg') left center
    animation: play 2s steps(8) infinite
    border-radius: 50%
    margin: 1rem

.info
    margin: 1rem
p
    padding: 0 1rem 2rem 1rem
    margin: 0
</style>
