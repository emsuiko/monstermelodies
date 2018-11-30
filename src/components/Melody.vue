<template lang="pug">
    label
        input(type="radio" name="audio")
        .incipit(:id="'incipit-'+melody.number")
            div(v-html="this.incipit" v-on:click="play()")
            span {{ melody.name }} - {{ melody.movement }}
            br
            span.links(v-if="list")
                a(:href="melody.rism" target="_blank") Link zum RISM-OPAC
                | &nbsp;|&nbsp;
                a(:href="melody.original" target="_blank") Link zur Notenhandschrift
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
        list: false,
        melody: {
            data: String,
            clef: String,
            keysig: String,
            timesig: String,
            number: Number,
            name: String,
            movement: String,
            original: String,
            rism: String
        }
    },
    methods: {
        play() {
            $("#incipit-"+this.melody.number).midiPlayer.play(this.melodie)
            this.$emit('play')
        }
    },
    mounted() {
        var vrvToolkit = new verovio.toolkit();
        var melodySignature = "@clef:"+this.melody.clef+"\n\@keysig:"+this.melody.keysig+"\n\@timesig:"+this.melody.timesig+"\n\@data:"+this.melody.data;
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

        var player = "#incipit-"+this.melody.number
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
    display: grid
    justify-content: center
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
        padding: 1rem
    .links
        font-size: 1rem
        a:hover
            color: #3565a6
</style>