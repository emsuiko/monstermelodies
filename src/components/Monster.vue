<template lang="pug">
    .monster
        h2 {{ monster.name }}
        img(:src="monster.image")
        .info
            p
                | {{ monster.description }}
</template>

<script>
export default {
    name: 'Monster',
    props: {
        monster: {
            id: Number,
            name: String,
            description: String,
            image: String,
            text: String
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
        max-width: minmax(200px, 1fr)
        grid-area: i
        justify-self: center
        margin: 1rem
        border-radius: 1rem
    .info
        grid-area: m
        font-size: 1rem
</style>
