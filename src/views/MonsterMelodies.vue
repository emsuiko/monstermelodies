<template lang="pug">
    .general
        h1 Willkommen bei Monster&thinsp;Melodies!
        p
            | Tauche ein in die Welt der Monster und Melodien.
            br
            | Besiege als tapferer Held Bartholomäus biblische Ungetüme mit Hilfe deiner getreuen Laute.
        img(alt="melodia" src="./../assets/equisa.png")
        div
            router-link(to="/game" class="btn") Start
</template>

<script>
export default {
    name: 'MonsterMelodies',
}
</script>

<style scoped lang="sass">
.general
    display: grid
    grid-template-rows: repeat(4, auto)
    grid-template-columns: auto
    h1
        align-self: center
    img
        justify-self: center
        width: 400px
        margin: 2rem
    p
        margin: 0 2rem
        @media screen and (max-width: 450px)
            margin: 0 .2rem
</style>
