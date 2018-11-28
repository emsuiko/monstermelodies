<template lang="pug">
    .about
        h1 Über MonsterMelodies
        p MonsterMelodies ist ein Projekt, das im Rahmen des Coding DaVinci RheinMain 2018-Hackathons entstanden ist.
        a(href="https://codingdavinci.de/events/rheinmain/" target="_blank")
            img(alt="Coding DaVinci RheinMain" src="./../assets/logo-cdvrm-2018.png")
        br
        a(href="https://hackdash.org/projects/5bd4a33096a2952c33e302c9") MonsterMelodies im Hackdash

        .datasets
            h2 Die Datengeber
            ul
                li
                    a(href="https://codingdavinci.de/daten/#martinus_bibliothek") Monster aus der Martinus-Bibliothek Mainz
                li Informationen zu den digitalisierten Autographen der Symphonien von Christoph Graupner, die sich in der &nbsp;
                    a(href="https://codingdavinci.de/daten/#ulb_darmstadt") ULB Darmstadt
                    | &nbsp; befinden, abgerufen über den &nbsp;
                    a(href="https://opac.rism.info/metaopac/refineSearch.do?id=manuskriptstatement_facet&methodToCall=filterSearch&subval=Autograph") OPAC von RISM
                li
                    a(href="https://codingdavinci.de/daten/#histmus_ffm") "Kleider in Bewegung" aus dem Historischen Museum Frankfurt

            h2 Weitere Datenquellen
            ul
                li eine zufällige Auswahl aus der &nbsp;
                    a(href="https://www.mithrilandmages.com/utilities/MedievalBrowse.php") List of Medieval Names von Mark Hassman
                li "grausame" Adjektive: API von &nbsp;
                    a(href="https://www.openthesaurus.de/about/api") openthesaurus.de
        .team
            h2 Das Team
            .member
                img(alt="Felix Wertschulte" src="./../assets/felix.png")
                .info
                    strong Felix Werthschulte
                    br
                    a(href="https://twitter.com/musikjournalist") @musikjournalist
            .member
                .info
                    strong Anett Gesierich
                    br
                    a(href="https://twitter.com/emsuiko") @emsuiko
                img(alt="Anett Gesierich" src="./../assets/anett.jpg")
            .member
                img(alt="Christian Binz" src="https://placeimg.com/200/200/tech")
                .info
                    strong Christian Binz


</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped lang="sass">
.about
    width: minmax(90vw, 1040px)
    margin: 1rem
    img
        width: 200px
    .member
        margin: 1rem auto
        width: 400px
        display: grid
        grid-template-columns: 1fr 1fr
        grid-template-rows: 1fr
        img
            border-radius: 50%
        .info
            display: grid
            align-content: center
    ul
        text-align: left
    a
        color: #3565a6
        &:hover
            color: #76a564
</style>
