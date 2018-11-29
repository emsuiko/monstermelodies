<template lang="pug">
    div
        h1 Alle Daten der MonsterMelodies
        ul
            li
                router-link(to="/monster") Monster
            li
                router-link(to="/melodies") Melodien
            li
                router-link(to="/recipes") Rezepte
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