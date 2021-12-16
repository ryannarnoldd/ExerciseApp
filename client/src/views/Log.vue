<template>
  <div class="container is-max-desktop is-text-centered">
    <h2 class="title is-large has-text-centered is-capitalized">
      <em>Log!</em>
    </h2>
    <h6 class="subtitle has-text-centered">
      This is where you are able to view all of the content posted from other
      <em>Fitizens</em> from all over the world.
    </h6>
    <h6 class="title has-text-centered">
      Total Calories Burned: {{ totalCalories }} <br />
      Total Minutes Exercised: {{ totalTime }}
    </h6>

    <div class="columns">
      <div class="column">
        <div
          class="exercise"
          v-for="(e, i) in exercises.slice().reverse()"
          :key="e.id"
        >
          <item :item="e" @remove="unlog(e, i)" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import session from "../services/session";
import { Unlog, GetAllLog, GetLog } from "../services/exercises";
import Item from "../components/Item.vue";

export default {
  components: {
    Item,
  },
  data: () => ({
    exercises: [],
    totalCalories: 0,
    totalTime: 0,
  }),
  async mounted() {
    const exercises = await GetLog(session.user.handle);
    exercises.concat(await GetAllLog(session.user.handle));
    this.exercises = [...new Set(exercises)];

    for (let i = 0; i < this.exercises.length; i++) {
      this.totalCalories += this.exercises[i].calories;
      this.totalTime += this.exercises[i].duration;
    }
  },
  methods: {
    async unlog(e, i) {
      const response = await Unlog(e._id);
      if (response.deleted) {
        this.exercises.splice(this.exercises.length - i - 1, 1);
      }
    },
  },
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

