<template lang="pug">
    div.win
        h3 Juhu, du hast gewonnen!
        .dress
        div
            router-link(to="/game" class="btn") Nochmal Spielen
</template>

<script>
export default {
    name: 'Win',
    props: {
    },
    methods : {

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
</style>
