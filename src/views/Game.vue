<template lang="pug">
    div
        .stats
            LevelBar(:level="this.level")
            HealthBar(:health="this.health")
        state(v-if="this.state.show" v-bind:success="this.state.success")
        .gamezone
            button.btn(v-on:click="getMonster" v-bind:class="monster ? 'hide' : 'show'") Finde Monster!
            monster(v-bind:monster="this.monster" v-if="this.monster")
            form(v-if="this.responses" @submit.prevent="submit")
                .responses
                    label(v-for="response in this.responses" v-on:click="play(response.audio, response.id)" )
                        input(type="radio" name="audio" value="response.id")
                        .incipit
                            img(:src="response.image")
                input.btn(type="submit" value="Vorspielen")

</template>

<script>
import Monster from "./../components/Monster.vue";
import State from "./../components/State.vue";
import HealthBar from "./../components/HealthBar.vue";
import LevelBar from "./../components/LevelBar.vue";
export default {
    name: "Game",
    components: {
        Monster,
        State,
        HealthBar,
        LevelBar
    },
    data () {
        return {
            level: 0,
            health: 5,
            state: {
                success: false,
                show: false,
            },
            audio: null,
            monster: null,
            responses: null
        }
    },
    methods: {
        getMonster: function () {
            this.state.success = false;
            this.state.show = false;

            this.monster = {
                name: "Hilda",
                image: "/melodia.png",
            };
            this.responses = [
                {
                    id: 1,
                    image: "/verovio_incipits.svg",
                    audio: "/audio1.mp3"
                },
                {
                    id: 2,
                    image: "/verovio_incipits.svg",
                    audio: "/audio2.mp3"
                }
            ];
        },
        play: function(sound, id) {
            var audio = new Audio(sound);
            audio.play();
            this.audio = id;
        },
        submit: function() {
            // reset gamezone
            this.monster = null;
            this.responses = null;

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
                if(this.level == 5) {
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

.responses
    display: grid
    label
        background-color: lightgray
        margin: .5rem
        > input
            visibility: hidden
            position: absolute
            &:checked ~ .incipit
                border: 1px solid red
        .incipit
            border: 1px solid black

</style>