  <template>
  <div class="card">
    <div class="card-content caption">
      <div class="content">
        <button class="delete" @click="$emit('remove')"></button>

        <h1>
          <b class="">{{ item.title }}</b>
        </h1>

        Activity: <b>{{ item.type }}</b
        >, Calories Burned: <b>{{ item.calories }}</b
        >, Workout Minutes: <b>{{ item.duration }} minutes.</b>
        <br />
        Date: <time class="small" :datetime="item.time">{{ prettyDate }}</time>
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
    item: Object,
  },
  computed: {
    prettyDate() {
      if (this.item.time) {
        return this.item.time.substring(0, 10);
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

.card-content.caption {
  padding: 3px 3px 3px 3px;
  padding: auto;
}
</style>