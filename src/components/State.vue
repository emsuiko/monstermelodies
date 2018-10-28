<template lang="pug">
    h3(v-if="this.success") Yay, du hast das Monster besiegt!
    h3(v-else) Mist, das war falsch!
</template>

<script>
export default {
    name: 'State',
    props: {
        success: null
    },
    methods : {

    }
}
</script>

<style scoped lang="sass">

</style>
