<template lang="pug">
    nav.nav
        router-link(to="/") Spiel
        router-link(to="/lists") Daten
        router-link(to="/about") Über
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
    }
}
</script>

<style scoped lang="sass">
nav
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: 1fr
    grid-gap: 1rem
    margin-bottom: 1rem
    padding: .5rem 0
    background-color: #3565a6

    a
        color: white
        &:first-of-type
            text-align: right
        &:last-of-type
            text-align: left
        &:hover
            text-decoration: underline
</style>
