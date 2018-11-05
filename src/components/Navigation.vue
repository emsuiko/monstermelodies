<template lang="pug">
    nav.nav
        router-link(to="/") MoMe
        router-link(to="/start") Start
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
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: 1fr
    grid-gap: 1rem
    margin-bottom: 1rem
    margin-top: 20px
    padding: .5rem 0
    background-color: #BB5B3F

    a
        color: #F8F5DE
        &:first-of-type
            text-align: right
        &:last-of-type
            text-align: left
        &:hover
            color: #FFC6A4
</style>
