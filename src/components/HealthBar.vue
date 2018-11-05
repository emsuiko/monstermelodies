<template lang="pug">
.health
    .title Leben
    .heart
        .icon
    .bar
        span(:style="{ width: health*20 + '%' }")
</template>

<script>
export default {
    name: "HealthBar",
    props: ['health'],
}
</script>

<style scoped lang="sass">
.health
    display: grid
    grid-template-rows: auto
    grid-template-areas: "title title title title title" "heart both bar bar bar"
.title
    grid-area: title
.heart
    width: 3.5rem
    height: 3.5rem
    border: 2px solid #494738
    background-color: #F8F5DE
    z-index: 2
    border-radius: 50%
    grid-column-start: heart-start
    grid-column-end: both-end
    justify-self: center
    grid-row: 2
    .icon
        background-color: #494738
        display: inline-block
        height: 1.5rem
        margin: 0 10px
        position: relative
        top: 1.3rem
        transform: rotate(-45deg)
        width: 1.5rem

        &:before, &:after
            content: ""
            background-color: #494738
            border-radius: 50%
            height: 1.5rem
            position: absolute
            width: 1.5rem

        &:before
            top: -0.75rem
            left: 0

        &:after
            left: 0.75rem
            top: 0
.bar
    height: 2rem
    margin-right: 2rem
    border: 2px solid #494738
    grid-column-start: both-start
    grid-column-end: bar-end
    grid-row: 2
    align-self: center
    span
        width: 100%
        height: 100%
        display: block
        background-color: #B20000
        transition: width 1s
</style>