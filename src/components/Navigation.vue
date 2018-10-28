<template>
    <nav class="nav">
        <router-link to="/">MoMe</router-link>
        <router-link to="/start">Start</router-link>
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
    a
        text-decoration: none
        padding: 1rem
</style>
