<template lang="pug">
    div
        h1 Alle Melodien der MonsterMelodies
        melody(v-for="melody in this.melodies" v-bind:data="melody.data" v-bind:number="melody.number" v-bind:keysig="melody.keysig" v-bind:timesig="melody.timesig" v-bind:clef="melody.clef" v-bind:name="melody.name" v-bind:movement="melody.movement")
</template>

<script>
const axios = require('axios');

import Melody from "./../components/Melody.vue"
export default {
    name: "MelodyList",
    components: {
        Melody
    },
    data() {
        return {
            melodies: []
        }
    },
    created: function () {
        axios.get('https://monsterapi.pythonanywhere.com/detail/melodies/')
            .then((response) => {
                var list = []
                response.data.forEach((melodie, k) => {
                    list[k] = {
                            data: melodie.pae_data,
                            keysig: melodie.keysig,
                            timesig: melodie.timesig,
                            clef: melodie.clef,
                            number: melodie.id,
                            name: melodie.work_title,
                            movement: melodie.movement
                        }
                });
                this.melodies = list
            });
    }
}
</script>

<style lang="sass">
</style>