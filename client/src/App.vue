<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Nav />
        <Messages />
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Messages from "./components/Messages.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav";
export default {
  components: {
    Nav,
    Footer,
    Messages,
  },
};
</script>