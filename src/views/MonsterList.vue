<template lang="pug">
    div
        h1 Alle Monster der MonsterMelodies
        monster(v-for="monster in this.monsters" v-bind:monster="monster")
</template>

<script>
const axios = require('axios');

import Monster from "./../components/MonsterExt.vue"
export default {
    name: "List",
    components: {
        Monster
    },
    data() {
        return {
            monsters: []
        }
    },
    created: function () {
        axios.get('https://monsterapi.pythonanywhere.com/detail/monsters/')
            .then((response) => {
                var list = []
                response.data.forEach((monster, k) => {
                    list[k] = {
                        id: monster.id,
                        name: monster.name,
                        description: monster.description,
                        image: "https://monsterapi.pythonanywhere.com/media/monster_pics/"+monster.picture_filename,
                        text: monster.bible_text,
                        passage: monster.bible_passage
                    }
                });
                this.monsters = list
            });
    }
}
</script>

<style lang="sass">
</style>