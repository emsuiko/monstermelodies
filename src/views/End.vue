<template lang="pug">
    div
        h3 Oh nein, das Monster hat dich gefressen!
        div
            img(src="./../assets/strafe.png")
            .info
                p Ausschnitt Schlangen unter dem Volk (4. Mose/Numeri 21, 6)
                p 4 Die Israeliten brachen vom Berg Hor auf und schlugen die Richtung zum Roten Meer ein, um Edom zu umgehen. Das Volk aber verlor auf dem Weg die Geduld, 5 es lehnte sich gegen Gott und gegen Mose auf und sagte: Warum habt ihr uns aus Ägypten heraufgeführt? Etwa damit wir in der Wüste sterben? Es gibt weder Brot noch Wasser und es ekelt uns vor dieser elenden Nahrung. 6 Da schickte der HERR Feuerschlangen unter das Volk. Sie bissen das Volk und viel Volk aus Israel starb. 7 Da kam das Volk zu Mose und sagte: Wir haben gesündigt, denn wir haben uns gegen den HERRN und gegen dich aufgelehnt. Bete zum HERRN, dass er uns von den Schlangen befreit! Da betete Mose für das Volk.
        router-link(to="/game" class="btn") Nochmal Spielen
</template>

<script>
export default {
    name: 'End',
    props: {
    },
    methods : {

    }
}
</script>

<style scoped lang="sass">
img
    width: 300px
.info
    font-size: 1rem
    padding: 2rem
</style>
