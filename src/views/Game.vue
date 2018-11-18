<template lang="pug">
    div
        .stats
            LevelBar(:level="this.level")
            HealthBar(:health="this.health")
        state(v-if="this.state.show" v-bind:success="this.state.success")
        .gamezone
            button.btn(v-on:click="getMonster" v-bind:class="monster.retrieved ? 'hide' : 'show'") Finde Monster!
            monster(v-bind:monster="this.monster" v-if="this.monster.retrieved")
            .melodies(v-if="this.monster.retrieved")
                p Wähle eine der Melodien aus um {{this.monster.name}} zu besiegen! Aber Obacht! Spielst du {{this.monster.name}} die falsche Melodie vor, wird dich ein gar schreckliches Unheil ereilen!
                form(@submit.prevent="submit")
                    .responses
                        melody(v-bind:melody="response" v-for="response in this.responses")
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
            monster: {
                retrieved: false,
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

            axios.get('http://monsterapi.pythonanywhere.com/game/?format=json')
                .then((response) => {
                    var data = response.data
                    var monster = {
                        retrieved: true,
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        image: data.picture_filename,
                        text: data.bible_text
                    }
                    this.monster = monster
            });
        },
        play(sound, id) {
            // var audio = new Audio(sound);
            // audio.play();
            this.disabled = false
            this.audio = id
        },
        submit() {
            // reset gamezone
            this.monster = null
            this.responses = null
            this.disabled = true

            // get response from server
            var success = true;
            if(this.audio == 1) {
                success = false;
            }

            // show result
            this.state.success = success;
            this.state.show = true;

            // update state and redirect if necessary
            if(success) {
                this.level += 1;
                if(this.level == 3) {
                    this.$router.push('win');
                }
            } else {
                this.health -= 1;
                if(this.health == 0){
                    this.$router.push('end');
                }
            }
        }
    }
}
</script>

<style scoped lang="sass">
.stats
    display: grid
    grid-template-columns: repeat(2, 1fr)
    margin-bottom: 2rem

.gamezone
    display: grid
    grid-template-areas: 'm r' 'm r' 'm r'
    grid-template-rows: auto
    grid-template-columns: auto auto
    @media screen and (max-width: 600px)
        grid-template-areas: 'm' 'r'
        grid-template-rows: auto auto
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
    label
        border-radius: 1rem
        margin: 1rem 5rem
        @media screen and (max-width: 450px)
            margin: .5rem
        > input
            visibility: hidden
            position: absolute

            &:checked ~ .incipit
                border: 2px solid #2F4858
                background-color: #9486a2
        .incipit
            background-color: #9fb9e3
            border: 2px solid #494738
            border-radius: 1rem
    input[type="submit"]
        justify-self: center
        &:disabled
            background-color: #07295d
            color: #9fb9e3
</style>