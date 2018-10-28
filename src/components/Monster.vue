<template lang="pug">
    .monster
        h2 {{ monster.name }}
        img(:src="monster.image")
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
    width: 500px
    img
        width: 400px
</style>
