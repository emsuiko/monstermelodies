<template lang="pug">
    .game
        .stats
            LevelBar(:level="this.level")
            HealthBar(:health="this.health")
        state(v-if="this.state.show" v-bind:success="this.state.success")
        .gamezone
            button.btn(v-on:click="getMonster" v-bind:class="retrieved ? 'hide' : 'show'") Finde Monster!
            monster(v-bind:monster="this.monster" v-if="this.retrieved")
            .melodies(v-if="this.retrieved")
                p Wähle eine der Melodien aus um {{this.monster.name}} zu besiegen! Aber Obacht! Spielst du {{this.monster.name}} die falsche Melodie vor, wird dich ein gar schreckliches Unheil ereilen!
                form(@submit.prevent="submit")
                    .responses(v-if="this.retrieved")
                        .response(v-for="response in this.responses")
                            melody(v-bind:data="response.data" v-bind:number="response.number" v-bind:keysig="response.keysig" v-bind:timesig="response.timesig" v-bind:clef="response.clef" v-bind:name="response.name" @play="play(response.number)")
                        input.btn(type="submit" value="Vorspielen" :disabled="disabled")

</template>

<script>
const axios = require('axios');

import Monster from "./../components/Monster.vue";
import State from "./../components/State.vue";
import HealthBar from "./../components/HealthBar.vue";
import LevelBar from "./../components/LevelBar.vue";
import Melody from "./../components/Melody.vue";

export default {
    name: "Game",
    components: {
        Monster,
        State,
        HealthBar,
        LevelBar,
        Melody
    },
    data () {
        return {
            disabled: true,
            level: 0,
            health: 5,
            state: {
                success: false,
                show: false,
            },
            audio: null,
            retrieved: false,
            monster: {
                id: Number,
                name: String,
                description: String,
                image: String,
                text: String
            },
            responses: []
        }
    },
    methods: {
        getMonster() {
            this.state.success = false;
            this.state.show = false;

            axios.get('https://monsterapi.pythonanywhere.com/game/?format=json')
                .then((response) => {
                    var data = response.data
                    this.retrieved = true
                    var monster = {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        image: data.picture_filename,
                        text: data.bible_text
                    }
                    this.monster = monster
                    var melodies = []
                    data.melodies.forEach((melodie, k) => {
                        melodies[k] = {
                            data: melodie.pae_data,
                            keysig: melodie.keysig,
                            timesig: melodie.timesig,
                            clef: melodie.clef,
                            number: melodie.id,
                            name: melodie.work_title
                        }
                    })
                    this.responses = melodies
            });
        },
        play(id) {
            this.disabled = false
            this.audio = id
        },
        async submit() {
            // reset gamezone
            this.responses = null
            this.disabled = true
            this.retrieved = false
            var success = false

            try {
                const response = await axios.get('https://monsterapi.pythonanywhere.com/checkmonster/'+this.monster.id+'/'+this.audio)

                // show result
                this.state.success = response.data.result;
                this.state.show = true;

                // update state and redirect if necessary
                if(this.state.success) {
                    this.level += 1;
                    if(this.level == 3) {
                        this.$router.push('win');
                    }
                } else {
                    this.animate = true;
                    setTimeout(() => {
                        this.animate = false;
                    }, 500);
                    this.health -= 1;
                    if(this.health == 0){
                        this.$router.push('end');
                    }

                }
            } catch (e) {
                this.errors.push(e)
            }
        }
    }
}
</script>

<style scoped lang="sass">
.game
    padding: 0 2rem

.stats
    display: grid
    grid-template-columns: repeat(2, 1fr)

.gamezone
    display: grid
    grid-template-areas: 'm' 'r'
    grid-template-rows: auto
    grid-template-columns: auto
    monster
        grid-area: m
    button
        grid-column: 1 / 3
        justify-self: center

.responses
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: repeat(4, auto)
    .response
        display: grid
        justify-content: center
    input[type="submit"]
        justify-self: center
        &:disabled
            background-color: #07295d
            color: #9fb9e3
</style>