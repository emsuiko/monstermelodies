<template lang="pug">
    label
        input(type="radio" name="audio")
        .incipit(:id="'incipit-'+number")
            div(v-html="this.incipit" v-on:click="play()")
            span {{ name }}
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
        data: String,
        clef: String,
        keysig: String,
        timesig: String,
        number: Number,
        name: String
    },
    methods: {
        play() {
            $("#incipit-"+this.id).midiPlayer.play(this.melodie)
            this.$emit('play')
        }
    },
    mounted() {
        var vrvToolkit = new verovio.toolkit();
        var melodySignature = "@clef:"+this.clef+"\n\@keysig:"+this.keysig+"\n\@timesig:"+this.timesig+"\n\@data:"+this.data;
        var svg = vrvToolkit.renderData(melodySignature, {
            inputFormat: 'pae',
            pageHeight: 200,
            pageWidth: 1000,
            scale: 40,
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
    margin: 0
    &:hover
        cursor: pointer
    > input
        visibility: hidden
        position: absolute

        &:checked ~ .incipit
            border: 2px solid #2F4858
            background-color: #bebb60
    .incipit
        background-color: #ffffff
        border: 2px solid #494738
        border-radius: 1rem
        margin-bottom: .5rem
        width: min-content
</style>