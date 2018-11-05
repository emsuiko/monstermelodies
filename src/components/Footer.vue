<template>
    <footer class="footer">
        <a href="https://codingdavinci.de/events/rheinmain/" target="_blank">
            Coding DaVinci RheinMain 2018
            <!-- <img src="./../assets/logo-cdvrm-2018.png" alt="Coding DaVinci RheinMain 2018" /> -->
        </a>
        <a href="http://dcms.bistummainz.de/bm/dcms/sites/einrichtungen/martinus-bibliothek/index.html" target="_blank">
            Martinus-Bibliothek Mainz
        </a>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
    }
}
</script>

<style scoped lang="sass">
footer
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 1rem
    @media screen and (max-width: 450px)
        grid-template-columns: 1fr
    a
        color: #2F4858
        &:first-of-type
            text-align: right
        &:last-of-type
            text-align: left
        &:hover
            color: #615F4E
</style>
