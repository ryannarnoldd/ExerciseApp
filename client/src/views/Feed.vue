
<template>
  <div class="container is-max-desktop">
    <h2 class="title is-large has-text-centered is-capitalized">
      <em>Feed!</em>
    </h2>
    <h6 class="subtitle has-text-centered">
      This is where you are able to view all of the content posted from other
      <em>Fitizen</em> users from all over the world.
    </h6>
    <div class="columns">
           
      <div class="column is-half is-offset-one-quarter">

            <div class="post" v-for=" (p, i) in posts" :key="p.src">
              <p>THIS IS A POST.</p>
              <post :post="p" @remove="remove(p, i)" />
              <br>
            </div>

            <div class="exercise" v-for=" e in exercises" :key="e.title">
              <p>THIS IS A EXERCISE.</p>
              <exercise :exercise="e" />
              <br>
            </div>
      </div>


    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import Exercise from "../components/Exercise.vue";
import session from "../services/session";
import { Delete, GetFeed, GetWall } from "../services/posts";
import { GetAllLog, GetLog } from "../services/exercises";


export default {
  components: {
    Post,
    Exercise,
  },
  data: () => ({
    posts : [],
    exercises : [],
  }),
  async mounted() {
    this.posts = await GetFeed(session.user.handle);
    this.posts.concat(await GetWall(session.user.handle));
    console.log(this.posts);

    this.exercises = await GetAllLog(session.user.handle);
    this.exercises.concat(await GetLog(session.user.handle));
    console.log(this.exercises);
  },
  methods: {
    async delete(post, i) {
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>