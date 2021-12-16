<template>
  <div class="container is-max-desktop">
    <h2 class="title is-large has-text-centered is-capitalized">
      <em>Friends!</em>
    </h2>
    <h6 class="subtitle has-text-centered">
      Welcome to the best place to find, or explore, friends who share the same
      healhy interest as you.
      <br />
      You may need to wait for them to accept your friend request, so BE
      PATIENT!
    </h6>
    <!-- Loop through the friends list and display using the friends object. -->
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="friend" v-for="f in friends" :key="f.id">
          <friend :friend="f" @remove="removeFriend(f.handle)" />
          <br />
        </div>
      </div>
    </div>

    <form>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Search Friends</label>
        </div>
        <!-- slot:empty -->
        <div class="field-body">
          <div class="field">
            <p class="control">
      <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="e.g. jQuery" icon="search" clearable @select="option => selected = option">
        <template v-slot:"empty" >No results found</template>
      </o-autocomplete>
            </p>
          </div>
          <div class="field">
            <auto-complete :items="results" @select="setResult"></auto-complete>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import session from "../services/session";
import { GetByHandle } from "../services/users";
import Friend from "../components/Friend.vue";
// import { Update } from "../services/users";
import AutoComplete from "../components/AutoComplete.vue";

export default {
  components: {
    Friend,
    AutoComplete,
  },
  data: () => ({
    testData: [
      { stuff: "Anne" },
      { stuff: "Bob" },
      { stuff: "Cindy" },
      { stuff: "Diane" },
    ],
    friends: [],
    friendHandles: [],
    text: "",
    selected: null,
  }),
  async mounted() {
    const handles = session.user.following.map((f) => f.handle);
    this.friends = await Promise.all(handles.map((h) => GetByHandle(h)));
  },
  methods: {
    async addFriend(handle) {
      if (!this.friends.includes(handle)) {
        session.user.following.push({
          handle: handle,
          isApproved: false,
        });
      }
      // update the user through the database now with the new changes.
      await session.user.Update(session.user.id, session.user);
    },
    async removeFriend(handle) {
      if (this.friends.includes(handle)) {
        session.user.following = session.user.following.filter(
          (f) => f.handle !== handle
        );
      }
      // update the user through the database now with the new changes.
      await session.user.Update(session.user.id, session.user);
    },
    async searchFriends() {
      return this.testData.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>