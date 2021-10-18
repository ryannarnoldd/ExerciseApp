<template>
    <div class="container">
        <Nav />
        <router-view />
        <Footer />
    </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav";
import Footer from './components/Footer';

export default {
    components: {
        Nav,
        Footer,
    }
};
</script>
