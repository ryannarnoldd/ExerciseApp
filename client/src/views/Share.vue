<template>
    <div class="container is-max-desktop">
        <h2 class="title is-large has-text-centered is-capitalized">
            <em>Share!</em>
        </h2>
        <h6 class="subtitle has-text-centered">
            This is where you are able to share your social, and workout, journey to the
            rest of the world and all other <em>Fitizens</em>.
        </h6>

        <div class="columns">
            <div class="column">
                <h6 class="title has-text-centered">
                    <em>Posts!</em>
                </h6>
                <post-edit :new-post="newPost" @add="add()" />

                <div class="column">
                    <post :post="newPost" />
                </div>
            </div>
            <div class="column">
                <h6 class="title has-text-centered">
                    <em>Exercises!</em>
                </h6>
                <exercise-edit :new-exercise="newExercise" @log="log()" />

                <div class="column">
                    <exercise :exercise="newExercise" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { Add } from "../services/posts";
import PostEdit from "../components/Post-edit.vue";
import Exercise from "../components/Exercise.vue";
import ExerciseEdit from "../components/Exercise-edit.vue";
import { Log } from "../services/exercises";

const newPost = ()=> ({ user: session.user, user_handle: session.user.handle});
const newExercise = ()=> ({ user: session.user, user_handle: session.user.handle});

export default {
    components: {
        Post,
        PostEdit,
        Exercise,
        ExerciseEdit
    },
    data: ()=> ({
        newPost: newPost(),
        newExercise: newExercise(),
    }),
    async mounted(){
        
    },
    methods: {

        async add(){
            const response = await Add(this.newPost);
            if (response.added) {
                this.newPost = newPost();
            }
        },
        async log(){
            const response = await Log(this.newExercise);
            if (response.added) {
                this.newExercise = newExercise();
            }
        }
    }
}

</script>

<style>
    .card {
        margin-bottom: 10px;
    }
</style>