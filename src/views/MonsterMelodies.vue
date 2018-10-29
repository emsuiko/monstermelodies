<template lang="pug">
  div.general
    h1 Monster&thinsp;Melodies
    img(alt="melodia" src="./../assets/melodia.png")
    div
      router-link(to="/game" class="btn") Start
</template>

<script>
export default {
  name: 'MonsterMelodies',
}
</script>

<style scoped lang="sass">
img
  max-width: 80%;
  height: auto;
</style>
