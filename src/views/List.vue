<template lang="pug">
    div
        monster(v-for="monster in this.monsters" v-bind:monster="monster")
</template>

<script>
import Monster from "./../components/Monster.vue"
export default {
    name: "List",
    components: {
        Monster
    },
    data() {
        return {
            monsters: []
        }
    },
    created: function () {
        this.monsters = [{
            name: "Egon",
            image: ""
        }]
    }
}
</script>

<style lang="sass">
</style>