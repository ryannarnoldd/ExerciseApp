<template>
    <form class="card" @submit.prevent="$emit('log')">
        <div class="card-content">
            <div class="content">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Input an awesome title to share with!" v-model="exercise.title" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Activity</label>
                                <div class="control">
                                    <div class="select is-fullwidth" type="sport">
                                        <select v-model="exercise.type">
                                            <option>Running</option>
                                            <option>Cycling</option>
                                            <option>Disc Sports</option>
                                            <option>Table Tennis</option>
                                            <option>Mixed Cardio</option>
                                            <option>Outdoor Walk</option>
                                            <option>Disc Sports</option>
                                            <option>Baseball</option>
                                            <option>Basketball</option>
                                            <option>Soccer</option>
                                            <option>Pool Swim</option>
                                            <option>Flexability</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                </div>
                <div class="field">
                    <label class="label">Calories Burned</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Caloriess Burned?" v-model="exercise.calories" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Workout Minutes</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Workout Duration, in Minutes?" v-model="exercise.duration" />
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="question" v-model="exercise.isPublic" :value="true" />
                            Public
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="exercise.isPublic" :value="false" />
                            Private
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <footer class="card-footer">
            <button class="button is-link card-footer-item" type="submit">Submit</button>
            <button class="button is-link is-light card-footer-item" type="reset" @click="resetToo">Cancel</button>

        </footer>
    </form>
</template>

<script>
export default {

    props: {
        newExercise: Object
    },
    data(){
        return {
            exercise: this.newExercise
        }
    },
    watch: {
        newExercise() {
            this.exercise = this.newExercise;
        }
    },
    methods: {
        resetToo(){
            this.exercise = { };
            this.$router.push('/feed');
        }
    }
}
</script>

<style>
</style>