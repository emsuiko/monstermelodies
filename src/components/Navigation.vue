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
    margin-bottom: 1rem
    margin-top: 20px
    padding: .5rem 0
    background-color: #7F0000

    a
        color: white
</style>
