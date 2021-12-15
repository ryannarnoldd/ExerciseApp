<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.src" :alt="post.alt" />
        <button
          v-if="post.user.handle === Session.user.handle"
          class="delete"
          @click="$emit('remove')"
        ></button>
      </figure>
    </div>
    <div class="card-content">
      <p class="subtitle is-text-centered">{{ post.caption }}</p>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.user.pic" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="subtitle is-6 has-text-left">
            <b v-if="post.user.handle !== Session.user.handle">{{ post.user.firstName }} {{ post.user.lastName }}</b>
            <b v-else>Me</b>
            <br />
            {{ post.user.handle }}
            <time class="small" :datetime="post.time">{{ prettyDate }}</time>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data: () => ({
    Session,
  }),
  props: {
    post: Object,
  },
  computed: {
    prettyDate() {
      if (this.post.time) {
        return this.post.time.substring(0, 10);
      } else {
        return "Now";
      }
    },
  },
};
</script>

<style>
button.delete {
  position: absolute;
  top: 5px;
  right: 5px;
}

.card {
  border-block-color: #000000;
  border-block-style: solid;
  border-block-width: 1px;
}
</style>