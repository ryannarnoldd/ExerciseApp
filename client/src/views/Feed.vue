
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
      <!--
          <div class="column">
              <div class="card">
                  <div class="card-content">
                      {{newPost}}
                  </div>
              </div>
          </div>
            -->
      <div class="column is-half is-offset-one-quarter">
        <!-- <post-edit :new-post="newPost" @add="add()" /> -->

            <div class="post" v-for=" (i, p) in posts" :key="p.src">
                <Post :post="p" @remove="remove(i, p)" />
            </div>
      </div>

      <!-- <div class="column"> -->
      <!-- <post :post="newPost" /> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import session from "../services/session";
import { Delete, GetFeed } from "../services/posts";


export default {
  components: {
    Post,
  },
  data: () => ({
    posts: [],
  }),
  async mounted() {
    this.posts = await GetFeed(session.user.handle);
  },
  methods: {
    async remove(post, i) {
      console.log({ post });
      const response = await Delete(post._id);
      if (response.deleted) {
        this.posts.splice(i, 1);
      }
    },
    // async add() {
    //   const response = await Add(this.newPost);
    //   console.log({ response });
    //   if (response) {
    //     this.posts.unshift(this.newPost);
    //     this.newPost = newPost();
    //   }
    // },
  },
};
</script>

<style>
.card {
  margin-bottom: 10px;
}
</style>