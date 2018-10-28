<template lang="pug">
    div
        h3 Juhu, du hast gewonnen!
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

</style>
