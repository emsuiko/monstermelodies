<template lang="pug">
    div(v-if="this.success")
        h3 Yay, du hast das Monster besiegt!
    div(v-else)
        h3 Mist, das war falsch!
        p {{monster}} möchte dich zu &nbsp;
            a(:href="recipe.href") {{recipe.title}}
            | &nbsp; verarbeiten… kannst du entfliehen?
</template>

<script>
export default {
    name: 'State',
    props: {
        success: null,
        recipe: Object,
        monster: String
    }
}
</script>

<style scoped lang="sass">

</style>
