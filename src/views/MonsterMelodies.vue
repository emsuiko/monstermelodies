<template lang="pug">
    .general
        h1 Willkommen bei Monster&thinsp;Melodies!
        p
            | Nunc sollicitudin luctus odio at euismod. Aliquam erat volutpat. Aliquam rhoncus egestas orci ac ultricies. Quisque mauris odio, cursus id varius ut, euismod vel dolor.
        img(alt="melodia" src="./../assets/melodia.png")
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
    grid-template-colums: 1fr
    h1
        align-self: center
    img
        justify-self: center
        @media screen and (max-width: 450px)
            width: 200px
    p
        margin: 0 2rem
        @media screen and (max-width: 450px)
            margin: 0 .2rem
</style>
