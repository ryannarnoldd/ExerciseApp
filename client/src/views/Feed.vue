
<template>
    <div class="container is-max-desktop">
        <h2 class="title is-large has-text-centered is-capitalized">
            <em>Feed!</em>
        </h2>
        <h6 class="subtitle has-text-centered">
            This is where you are able to view all of the content posted from other
            <em>Fitizens</em> from all over the world.
        </h6>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                
                <div class="exercise" v-for="(e, i) in exercises" :key="e.handle">
                    <exercise :exercise="e" @remove="unlog(e, i)" />
                    <br>
                </div>

                <div class="post" v-for="(p, i) in posts" :key="p.src">
                    <post :post="p" @remove="remove(p, i)" />
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
import { Unlog, GetAllLog, GetLog } from "../services/exercises";
import { Delete, GetFeed, GetWall } from "../services/posts";

export default {
    components: {
        Post,
        Exercise
    },
    data: () => ({
        exercises: [],
        posts: []
    }),
    async mounted() {
        const posts = await GetFeed(session.user.handle);
        posts.concat(await GetWall(session.user.handle));
        this.posts = [...new Set(posts)];

        const exercises = await GetLog(session.user.handle);
        exercises.concat(await GetAllLog(session.user.handle));
        this.exercises = [...new Set(exercises)];
    },
    methods: {
        async remove(p, i) {
            const response = await Delete(p._id);
            if (response.deleted) {
                this.posts.splice(i, 1);
            }
        },
        async unlog(e, i) {
            const response = await Unlog(e._id);
            if (response.deleted) {
                this.exercises.splice(i, 1);
            }
        }
    }
};
</script>

<style>
.card {
    margin-bottom: 10px;
}
/* <div v-for="n in all" :key="n.user.handle">
                    <div v-if="n.type === 'exercise'">
                        <exercise :exercise="n" />
                    </div>
                    <div v-if="n.type === 'post'">
                        <post :post="n" />
                    </div>
                </div> */

/* 
Feed remove to work.
Share to add.
// profile management.
    whoever user is signed in, can view their profile.
    try updating their profile. only after everything else.
registration
    in register, connected it with adding new User
concact will send email to ryannarnoldd.
 or maybe send to db.
     */

</style>

