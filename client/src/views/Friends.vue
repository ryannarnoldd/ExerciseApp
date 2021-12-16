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

    <h6 class="subtitle has-text-centered">
      Search for all users, including yourself, to see who else is a <em>Fitizen</em>
    </h6>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Search Users</label>
        </div>
        <!-- slot:empty -->
        <div class="field-body is-horizontal">
          <div class="field">
            <p class="control">
              <o-autocomplete
                v-model="handle"
                placeholder="Search for any user! (e.g. @friend)"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="searchFriends"
                @typing="onSearch"
                field="handle"
                @select="(option) => (selected = option)">
              </o-autocomplete>
            </p>
            <br>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-dark">
                Add Friend
              </button>
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import session from "../services/session";
import { GetByHandle, GetBySearch } from "../services/users";
import Friend from "../components/Friend.vue";
// import { Update } from "../services/users";
// import AutoComplete from "../components/AutoComplete.vue";

export default {
  components: {
    Friend,
    // AutoComplete,
  },
  data: () => ({
    friends: [],
    searchedUsers: [],
    keepFirst: false,
    openOnFocus: false,
    handle: "",
    selected: null,
  }),
  async mounted() {
    const handles = session.user.following.map((f) => f.handle);
    this.friends = await Promise.all(handles.map((h) => GetByHandle(h)));
  },

  computed: {
    searchFriends() {
      return this.searchedUsers.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            // Not the currnet user's handle...
            // .indexOf(session.user.handle.toLowerCase()) === -1
        );
      });
    },
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
    async onSearch(search) {
      if (search.length > 0) {
        this.searchedUsers = await GetBySearch(search);
      }
      else {
        this.searchedUsers = [];
      }
    },
  },
};
</script>