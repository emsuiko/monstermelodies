<template lang="pug">
    label
        input(type="radio" name="audio")
        .incipit#player
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
            response: {
                id: Number,
                title: String,
                gwv: String,
                clef: String,
                timesig: String,
                keysig: String,
                pae_data: String,
                mei_data: String
            },
            incipit: String,
            melodie: String
        }
    },
    methods: {
        play() {
            console.log(this.melodie)
            // var audio = new Audio(this.melodie);
            // audio.play();
            var vrvToolkit = new verovio.toolkit();

            $(".inicipit").midiPlayer.play(this.melodie);
        }
    },
    mounted() {
        // let recaptchaScript = document.createElement('script')
        // recaptchaScript.setAttribute('src', '/verovio-toolkit-dev.js')
        // document.head.appendChild(recaptchaScript)
    },
    mounted: function () {
        /* Load the file using HTTP GET */
        var mei = this.response.mei_data
        var vrvToolkit = new verovio.toolkit();
        var svg = vrvToolkit.renderData(mei, {});
        this.incipit = svg


        var base64midi = vrvToolkit.renderToMIDI();
        var song = 'data:audio/midi;base64,' + base64midi;
        this.melodie = song

        var midiUpdate = function(time) {
                var vrvTime = Math.max(0, time - 400);
                var elementsattime = vrvToolkit.getElementsAtTime(vrvTime);
                if (elementsattime.page > 0) {
                    if (elementsattime.page != page) {
                        page = elementsattime.page;
                        loadPage();
                    }
                    if ((elementsattime.notes.length > 0) && (ids != elementsattime.notes)) {
                        ids.forEach(function(noteid) {
                            if ($.inArray(noteid, elementsattime.notes) == -1) {
                                $("#" + noteid).attr("fill", "#000").attr("stroke", "#000");
                            }
                        });
                        ids = elementsattime.notes;
                        ids.forEach(function(noteid) {
                            if ($.inArray(noteid, elementsattime.notes) != -1) {
                                $("#" + noteid).attr("fill", "#c00").attr("stroke", "#c00");;
                            }
                        });
                    }
                }
            }

            var midiStop = function() {
                ids.forEach(function(noteid) {
                    $("#" + noteid).attr("fill", "#000").attr("stroke", "#000");
                });
                $("#player").hide();
                isPlaying = false;
            }

            $('.incipit').midiPlayer({
                    color: "red",
                    onUpdate: midiUpdate,
                    onStop: midiStop,
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