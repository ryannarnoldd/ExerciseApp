  <template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <button class="delete" @click="$emit('remove')"></button>
        Friend:  <b>{{ friend.firstName }} {{ friend.lastName }}</b><br> 
        Handle:  <b>{{ friend.handle }}</b><br>
        Following Amount:  <b>{{ friend.following.length }}</b>
        <br>
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
    friend: Object,
  }
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