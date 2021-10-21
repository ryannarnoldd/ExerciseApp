<template>
    <div class="container">
        <Nav />
        <messages />
        <router-view />
        <Footer />
    </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Messages from './components/Messages.vue';

export default {
    components: {
        Nav,
        Footer,
        Messages
    }
};
</script>
