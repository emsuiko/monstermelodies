<template lang="pug">
    label
        input(type="radio" name="audio")
        .incipit(:id="'incipit-'+number")
            div(v-html="this.incipit" v-on:click="play()")
            //- img(v-html="this.incipit")
</template>

<script>
const axios = require('axios');
export default {
    name: "Melody",
    components: {
    },
    data () {
        return {
            incipit: String,
            melodie: String
        }
    },
    props: {
        mei: String,
        number: Number
    },
    methods: {
        play() {
            // var audio = new Audio(this.melodie);
            // audio.play();
            var vrvToolkit = new verovio.toolkit();

            $("#incipit-"+this.id).midiPlayer.play(this.melodie);
        }
    },
    mounted() {
        var vrvToolkit = new verovio.toolkit();
        var svg = vrvToolkit.renderData(this.mei, {
            pageHeight: 200,
            pageWidth: 1000,
            scale: 50,
            adjustPageHeight: true,
            noHeader: true,
            noFooter: true,
            breaks: "none"
        });
        this.incipit = svg

        var base64midi = vrvToolkit.renderToMIDI();
        var song = 'data:audio/midi;base64,' + base64midi;
        this.melodie = song

        var player = "#incipit-"+this.number
        $(player).midiPlayer({
                color: "red",
                // onUpdate: midiUpdate,
                // onStop: midiStop,
                width: 250
        });


    },
}
</script>

<style scoped lang="sass">
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
        svg
            // width: 5rem
</style>