<template lang="pug">
    div
        h1 Alle Melodien der MonsterMelodies
        melody(v-for="melody in this.melodies" v-bind:melody="melody" v-bind:list="true")
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
        axios.get('https://monsterapi.pythonanywhere.com/detail/melodies/?format=json')
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
                            movement: melodie.movement,
                            original: melodie.tu_da_link,
                            rism: melodie.rism_opac_link
                        }
                });
                this.melodies = list
            });
    }
}
</script>

<style lang="sass">

</style>