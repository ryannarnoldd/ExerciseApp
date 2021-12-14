  <template>
  <div class="card">
    <div class="card-content">
      <div class="content">
          <button v-if="exercise.user.handle === Session.user.handle" class="delete" @click="$emit('remove')"></button>

        <h1>
          <b>{{ exercise.title }}<br /></b>
        </h1>
        <hr />
        Activity: <b>{{ exercise.type }}</b
        ><br />
        Caloried Burned: <b>{{ exercise.calories }}</b
        ><br />
        Workout Minutes: <b>{{ exercise.duration }} minutes</b><hr />
      </div>

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="exercise.user.pic" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="subtitle is-6">
            <b>{{ exercise.user.firstName }} {{ exercise.user.lastName }}</b> <br>
            {{ exercise.user.handle }}
            <time class="small" :datetime="exercise.time">{{ prettyDate }}</time>
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
    exercise: Object,
  },
  computed: {
    prettyDate() {
        
      if (this.exercise.time) {
        return this.exercise.time.substring(0, 10);
      } else {
        return "Never";
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
</style>