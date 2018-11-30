<template lang="pug">
    .general
        h1 Willkommen bei Monster&thinsp;Melodies!
        .intro
            p
                | Tauche ein in die Welt der Monster und Melodien.
                br
                | Besiege als tapferer Held Bartholomäus biblische Ungetüme mit Hilfe deiner getreuen Laute.
            router-link(to="/game" class="btn") Start
        img(alt="melodia" src="./../assets/equisa.png")
</template>

<script>
export default {
    name: 'MonsterMelodies',
}
</script>

<style scoped lang="sass">
.general
    display: grid
    grid-template-areas: 'h h' 'm t'
    @media screen and (max-width: 450px)
        grid-template-areas: 'h' 'm' 't'
    h1
        align-self: center
        grid-area: h
        @media screen and (max-width: 450px)
            font-size: 2rem
    img
        justify-self: center
        width: 200px
        margin: 2rem
        grid-area: m
        @media screen and (max-width: 450px)
            margin: 0
    .intro
        margin: 0 2rem
        grid-area: t
</style>
