<template lang="pug">
    div
        h1 Alle Rezepte der MonsterMelodies
        ul
            li(v-for="recipe in this.list")
                a(:href="recipe.href" target="_blank") {{recipe.title}}
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
ul
    list-style: none
a:hover
    color: #3565a6
</style>