<template>
    <div class="container is-max-desktop">
        <h2 class="title is-large has-text-centered is-capitalized"><em>Feed!</em></h2>
        <h6 class="subtitle has-text-centered">
            This is where you are able to view all of the content posted from other <em>Fitizen</em> users from all over the world.
        </h6>
        <!--
        <h6 class="subtitle has-text-centered">
            You need to add friends before seeing other posts in your feed. We have no enabled the explore page option for privacy reasons.
        </h6>
        -->
        <div class="columns">
            <div class="column is-one-third is-offset-one-third">
                <div class="post" v-for="p in posts" :key="p.src">
                    <Post :post="p"/>
                </div>   
            </div>
      </div>
    </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { GetWall } from "../services/posts";

export default {
    components: { Post },
    data: ()=> ({
      posts: GetWall(session.user.handle)
    })
}
</script>