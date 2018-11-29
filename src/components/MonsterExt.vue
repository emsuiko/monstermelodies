<template lang="pug">
    .monster
        h2 {{ monster.name.complete }}
        img(:src="monster.image")
        .details
            .info
                div
                    | {{ monster.description }}
                div(v-if="monster.text")
                    h2 Bibelstelle
                    | {{ monster.text }}
</template>

<script>
export default {
    name: 'Monster',
    props: {
        monster: {
            id: Number,
            name: Object,
            description: String,
            image: String,
            text: String,
            passage: String
        },
    },
    methods : {

    }
}
</script>

<style scoped lang="sass">
.monster
    margin: 2rem
    padding: 1rem
    background-color: rgba(256,256,256,0.7)
    border: 1px dotted black
    border-radius: 1rem
    img
        width: 200px
        grid-area: m
        justify-self: center
        margin: 1rem
        border-radius: 1rem
    .details
        grid-area: i
        .info
            font-size: 1rem
</style>
