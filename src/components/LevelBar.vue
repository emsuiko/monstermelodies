<template lang="pug">
.level
    .title Level
    .bar
        span(:style="{ width: level*33 + '%' }")
    .number
        .icon {{this.level}}
</template>

<script>
export default {
    name: "LevelBar",
    props: ['level'],
}
</script>

<style scoped lang="sass">
$level: #119b8e
.level
    display: grid
    grid-template-rows: auto
    grid-template-areas: "title title title title title" "bar bar bar both number"
.title
    grid-area: title
.number
    width: 3.5rem
    height: 3.5rem
    border: 2px solid #494738
    background-color: #F8F5DE
    z-index: 2
    border-radius: 50%
    grid-column-start: both-start
    grid-column-end: number-end
    justify-self: center
    grid-row: 2
    .icon
        line-height: 3.3rem
        font-size: 3rem

.bar
    height: 2rem
    margin-left: 2rem
    border: 2px solid #494738
    grid-column-start: bar-start
    grid-column-end: both-end
    grid-row: 2
    align-self: center
    span
        width: 100%
        height: 100%
        display: block
        background-color: $level
        transition: width 1s
</style>