<template lang="pug">
    .story
        h3 Monster Melodies
        div.text
            vue-typer(
                :text='["Diese Geschichte erzählt von einem jungen Mann.","Einem bedauernswerten Jüngling, dem Ungeheuerliches widerfuhr.","Sein Name: Bartholomäus Gensfleisch.","Er wurde im Jahr 1404 in Mainz geboren. Eine wahrhaft prächtige Stadt.","Seine wohlhabenden Eltern liebten ihn sehr. Doch im Grunde hatten sie nur Augen für seinen älteren Bruder.","Johannes hier, Johannes da.","Johannes durfte alles. Zinnsoldaten. Laterna magica. Sogar ein kleines Schiffchen, das auf magische Weise in der Luft schweben konnte.","Bartholomäus musste sich mit einer alten Leier abgeben. Opa Gensfleisch hatte sie während der Pest gespielt und dadurch überlebt.","Aus Trotz begann Bartholomäus, sich von der Familie abzunabeln. Er begann eine Ausbildung zum Damenschneider.","Ein hartes Geschäft. Und gar nicht mal so ungefährlich.","Denn Bartholomäus verliebte sich unsterblich in Spundita. Sie war die Tochter des lokalen Frischkäsemagnaten.","Sicherlich eine Nummer zu hoch für ihn.","Aber unglaublich hübsch!","Könnte er doch nur das perfekte Kleid für sie nähen ...","Eines Tages erschienen unverhofft zwei dunkle Gestalten in seiner Schneiderstube: Ein Winzling und ein Hüne. Graue Kutten, schwarze Augenringe.","Wir wissen um deinen stärksten Wunsch, raunte der Hüne. Und wenn du dir ein bisschen Mühe gibst, bist du ihm näher als du denkst!","Er drückte dem verdutzten Bartholomäus ein dickes Buch in die zerstochenen Hände.","Die Melodien darin wirst du gut gebrauchen können. Die Monster, denen du begegnen wird, werden durch diese Noten zur Ruhe gebracht. Jedes von ihnen hat seine eigene Weise. Doch welche es ist, das musst du herausfinden.","Welche Gestalten? Welche Begegnung? Bartholomäus war so verdutzt, dass er nur noch stammeln konnte. Da funkelte ihn der Winzling an. Ut omnes unum sint, murmelte er in seinen dichten Rauschebart.","Da tat sich unter Bartholomäus ein tiefschwarzes Loch auf.","Er fiel. Und fiel.","Und fiel."]'
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
        div.img
            img.big(src="./../assets/Bartholomaeus01.png")
            img.small(src="./../assets/Bartholomaeus02.png")

</template>

<script>
var VueTyper = require('vue-typer').VueTyper
export default {
    components: {
        VueTyper
    }
}
</script>

<style lang="sass" scoped>
.story
    display: grid
    grid-template-areas: 'h h' 'i t'
    grid-template-columns: auto 1fr
    @media screen and (max-width: 450px)
        grid-template-areas: 'h' 'i' 't'
        grid-template-columns: 1fr

    h3
        grid-area: h

    .img
        grid-area: i
        display: grid
        justify-content: center

        img
            &.big
                @media screen and (max-width: 450px)
                    display: none
            &.small
                display: none
                @media screen and (max-width: 450px)
                    display: block

    .text
        grid-area: t
        padding-top: 2rem
        padding-left: 2rem
</style>
