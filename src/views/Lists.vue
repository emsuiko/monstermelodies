<template lang="pug">
    div
        h1 Alle Daten der MonsterMelodies
        .lists
            .list
                router-link(to="/monster")
                    img(src="./../assets/all_monsters_thumb.png" alt="Monster")
                    .title Monster
            .list
                router-link(to="/melodies")
                    img(src="./../assets/all_melodies_thumb.png" alt="Melodien")
                    .title Melodien
            .list
                router-link(to="/recipes")
                    img(src="./../assets/all_recipes_thumb.png" alt="Rezepte")
                    .title Rezepte
</template>

<script>
const axios = require('axios');

export default {
    name: "Rezepte",
    data() {
        return {
            list: []
        }
    },
    created: function () {
        axios.get('https://monsterapi.pythonanywhere.com/detail/recipes/?format=json')
            .then((response) => {
                this.list = response.data
            });
    }
}
</script>

<style lang="sass" scoped>
.lists
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: repeat(3, 1fr)
    @media screen and (max-width: 450px)
        grid-template-rows: repeat(3, 1fr)
        grid-template-columns: 1fr
    .list
        margin: 1rem
img
    width: 200px
a:hover
    color: #3565a6
</style>