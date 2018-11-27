<template lang="pug">
    nav.nav
        router-link(to="/") MoMe
        router-link(to="/monster") Monster
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
$primary: #0f52ba
$secondary: #2a0d45
$important: #9b111e

nav
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: 1fr
    grid-gap: 1rem
    margin-bottom: 1rem
    margin-top: 20px
    padding: .5rem 0
    background-color: $secondary

    a
        color: white
        &:first-of-type
            text-align: right
        &:last-of-type
            text-align: left
        &:hover
            text-decoration: underline
</style>
