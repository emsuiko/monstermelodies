<template lang="pug">
    .monster
        h2 {{ monster.name }}
        img(:src="monster.image")
        .info
            | Curabitur in lacinia tellus, eu.
</template>

<script>
export default {
    name: 'Monster',
    props: {
        audio: "",
        monster: {
            name: String,
            image: String
        },
    },
    methods : {

    }
}
</script>

<style scoped lang="sass">
.monster
    display: grid
    grid-template-columns: 2rem 1fr 2rem
    grid-template-rows: repeat(3, auto)
    grid-template-areas: 'h h h' '. i .' '. m .'
    h2
        grid-area: h
    img
        max-width: 200px
        grid-area: i
        justify-self: center
        margin: 1rem
        border-radius: 1rem
    .info
        grid-area: m
</style>
