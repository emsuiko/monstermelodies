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
                        input(type="radio" name="audio" :value="response.id")
                        .incipit
                            img(:src="response.image")
                input.btn(type="submit" value="Vorspielen" :disabled="disabled")

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
            disabled: true,
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
    grid-template-columns: 1fr
    grid-template-rows: repeat(3, 1fr)
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
                background-color: #C5D2BD
        .incipit
            background-color: #C0BDA7
            border: 2px solid #494738
            border-radius: 1rem

</style>