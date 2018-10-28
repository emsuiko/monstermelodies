<template lang="pug">
    div
        h3 Oh nein, das Monster hat dich gefressen!
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

</style>
