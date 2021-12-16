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
              <o-autocomplete
                v-model="friend"
                placeholder="Search for any users! (e.g. @friend)"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="searchFriends"
                @typing="onSearch"
                field="user.handle"
                @select="(option) => (selected = option)"
              >
              </o-autocomplete>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import session from "../services/session";
import { GetByHandle, GetBySearch } from "../services/users";
import Friend from "../components/Friend.vue";
// import { Update } from "../services/users";
// import AutoComplete from "../components/AutoComplete.vue";
const data = [
  {
    id: 1,
    user: { handle: "Jesse", last_name: "Simmons" },
    date: "2016/10/15 13:43:27",
    gender: "Male",
  },
  {
    id: 2,
    user: { handle: "John", last_name: "Jacobs" },
    date: "2016/12/15 06:00:53",
    gender: "Male",
  },
  {
    id: 3,
    user: { handle: "Tina", last_name: "Gilbert" },
    date: "2016/04/26 06:26:28",
    gender: "Female",
  },
  {
    id: 4,
    user: { handle: "Clarence", last_name: "Flores" },
    date: "2016/04/10 10:28:46",
    gender: "Male",
  },
  {
    id: 5,
    user: { handle: "Anne", last_name: "Lee" },
    date: "2016/12/06 14:38:38",
    gender: "Female",
  },
  {
    id: 6,
    user: { handle: "Sara", last_name: "Armstrong" },
    date: "2016/09/23 18:50:04",
    gender: "Female",
  },
  {
    id: 7,
    user: { handle: "Anthony", last_name: "Webb" },
    date: "2016/08/30 23:49:38",
    gender: "Male",
  },
  {
    id: 8,
    user: { handle: "Andrew", last_name: "Greene" },
    date: "2016/11/20 14:57:47",
    gender: "Male",
  },
  {
    id: 9,
    user: { handle: "Russell", last_name: "White" },
    date: "2016/07/13 09:29:49",
    gender: "Male",
  },
  {
    id: 10,
    user: { handle: "Lori", last_name: "Hunter" },
    date: "2016/12/09 01:44:05",
    gender: "Female",
  },
  {
    id: 11,
    user: { handle: "Ronald", last_name: "Wood" },
    date: "2016/12/04 02:23:48",
    gender: "Male",
  },
  {
    id: 12,
    user: { handle: "Michael", last_name: "Harper" },
    date: "2016/07/27 13:28:15",
    gender: "Male",
  },
  {
    id: 13,
    user: { handle: "George", last_name: "Dunn" },
    date: "2017/03/07 12:26:52",
    gender: "Male",
  },
  {
    id: 14,
    user: { handle: "Eric", last_name: "Rogers" },
    date: "2016/06/07 05:41:52",
    gender: "Male",
  },
  {
    id: 15,
    user: { handle: "Juan", last_name: "Meyer" },
    date: "2017/02/01 04:56:34",
    gender: "Male",
  },
  {
    id: 16,
    user: { handle: "Silvia", last_name: "Rosa" },
    date: "2017/01/26 11:50:04",
    gender: "Female",
  },
  {
    id: 17,
    user: { handle: "Lori", last_name: "Cunningham" },
    date: "2016/05/01 10:00:56",
    gender: "Female",
  },
  {
    id: 18,
    user: { handle: "Charles", last_name: "Graham" },
    date: "2016/05/31 06:43:30",
    gender: "Male",
  },
  {
    id: 19,
    user: { handle: "Henry", last_name: "Morrison" },
    date: "2016/09/27 16:15:44",
    gender: "Male",
  },
  {
    id: 20,
    user: { handle: "Albert", last_name: "Mendoza" },
    date: "2016/08/08 05:29:24",
    gender: "Male",
  },
  {
    id: 21,
    user: { handle: "Ruby", last_name: "Snyder" },
    date: "2017/04/01 12:04:39",
    gender: "Female",
  },
  {
    id: 22,
    user: { handle: "Jesse", last_name: "Warren" },
    date: "2016/08/20 01:36:38",
    gender: "Male",
  },
  {
    id: 23,
    user: { handle: "Carlos", last_name: "Ferguson" },
    date: "2016/05/31 10:40:29",
    gender: "Male",
  },
  {
    id: 24,
    user: { handle: "Melissa", last_name: "Peters" },
    date: "2016/07/23 00:41:54",
    gender: "Female",
  },
  {
    id: 25,
    user: { handle: "Arthur", last_name: "Garza" },
    date: "2017/03/11 14:11:37",
    gender: "Male",
  },
  {
    id: 26,
    user: { handle: "Joe", last_name: "Berry" },
    date: "2016/07/09 15:16:56",
    gender: "Male",
  },
  {
    id: 27,
    user: { handle: "Joseph", last_name: "Bishop" },
    date: "2016/10/04 19:44:54",
    gender: "Male",
  },
  {
    id: 28,
    user: { handle: "Sarah", last_name: "Harper" },
    date: "2016/09/23 05:09:11",
    gender: "Female",
  },
  {
    id: 29,
    user: { handle: "Christopher", last_name: "Fuller" },
    date: "2016/04/12 00:05:35",
    gender: "Male",
  },
  {
    id: 30,
    user: { handle: "Alan", last_name: "Mendoza" },
    date: "2016/04/22 10:48:02",
    gender: "Male",
  },
  {
    id: 31,
    user: { handle: "James", last_name: "Davis" },
    date: "2017/01/16 15:17:03",
    gender: "Male",
  },
  {
    id: 32,
    user: { handle: "Scott", last_name: "Welch" },
    date: "2016/10/04 23:31:51",
    gender: "Male",
  },
  {
    id: 33,
    user: { handle: "Mildred", last_name: "Myers" },
    date: "2016/11/23 13:46:18",
    gender: "Female",
  },
  {
    id: 34,
    user: { handle: "Victor", last_name: "Martinez" },
    date: "2016/04/06 17:05:07",
    gender: "Male",
  },
  {
    id: 35,
    user: { handle: "Susan", last_name: "Medina" },
    date: "2016/12/09 10:33:37",
    gender: "Female",
  },
  {
    id: 36,
    user: { handle: "Judy", last_name: "Long" },
    date: "2016/07/26 16:19:04",
    gender: "Female",
  },
  {
    id: 37,
    user: { handle: "Joan", last_name: "Myers" },
    date: "2016/09/22 04:55:54",
    gender: "Female",
  },
  {
    id: 38,
    user: { handle: "Rachel", last_name: "Gonzales" },
    date: "2016/07/15 13:56:38",
    gender: "Female",
  },
  {
    id: 39,
    user: { handle: "Roger", last_name: "Hunt" },
    date: "2016/08/14 10:43:11",
    gender: "Male",
  },
  {
    id: 40,
    user: { handle: "Dorothy", last_name: "Howard" },
    date: "2016/06/19 05:34:49",
    gender: "Female",
  },
  {
    id: 41,
    user: { handle: "Eugene", last_name: "Lynch" },
    date: "2016/12/24 08:19:24",
    gender: "Male",
  },
  {
    id: 42,
    user: { handle: "Kathy", last_name: "Webb" },
    date: "2017/04/01 21:09:05",
    gender: "Female",
  },
  {
    id: 43,
    user: { handle: "Antonio", last_name: "White" },
    date: "2017/02/10 06:51:20",
    gender: "Male",
  },
  {
    id: 44,
    user: { handle: "Louis", last_name: "Spencer" },
    date: "2016/10/08 02:20:22",
    gender: "Male",
  },
  {
    id: 45,
    user: { handle: "Andrea", last_name: "Marshall" },
    date: "2016/09/04 10:59:57",
    gender: "Female",
  },
  {
    id: 46,
    user: { handle: "Eugene", last_name: "Sims" },
    date: "2017/03/15 06:39:48",
    gender: "Male",
  },
  {
    id: 47,
    user: { handle: "Mildred", last_name: "Gibson" },
    date: "2016/04/18 06:43:54",
    gender: "Female",
  },
  {
    id: 48,
    user: { handle: "Joan", last_name: "Arnold" },
    date: "2016/12/16 04:52:23",
    gender: "Female",
  },
  {
    id: 49,
    user: { handle: "Jesse", last_name: "Schmidt" },
    date: "2016/06/11 02:44:33",
    gender: "Male",
  },
  {
    id: 50,
    user: { handle: "David", last_name: "Frazier" },
    date: "2017/02/15 21:46:30",
    gender: "Male",
  },
  {
    id: 51,
    user: { handle: "Nicholas", last_name: "Howell" },
    date: "2016/11/01 15:08:31",
    gender: "Male",
  },
  {
    id: 52,
    user: { handle: "Douglas", last_name: "Chapman" },
    date: "2017/02/08 03:33:24",
    gender: "Male",
  },
  {
    id: 53,
    user: { handle: "Bruce", last_name: "Simmons" },
    date: "2016/07/14 12:11:17",
    gender: "Male",
  },
  {
    id: 54,
    user: { handle: "Antonio", last_name: "George" },
    date: "2016/11/07 19:12:55",
    gender: "Male",
  },
  {
    id: 55,
    user: { handle: "Chris", last_name: "Marshall" },
    date: "2016/07/03 12:11:45",
    gender: "Male",
  },
  {
    id: 56,
    user: { handle: "Ashley", last_name: "Hudson" },
    date: "2016/10/14 21:08:05",
    gender: "Female",
  },
  {
    id: 57,
    user: { handle: "Alan", last_name: "Edwards" },
    date: "2017/03/22 21:10:25",
    gender: "Male",
  },
  {
    id: 58,
    user: { handle: "George", last_name: "Clark" },
    date: "2016/04/28 03:15:05",
    gender: "Male",
  },
  {
    id: 59,
    user: { handle: "Frank", last_name: "Porter" },
    date: "2016/09/08 00:48:14",
    gender: "Male",
  },
  {
    id: 60,
    user: { handle: "Christopher", last_name: "Palmer" },
    date: "2016/05/24 08:58:12",
    gender: "Male",
  },
];
export default {
  components: {
    Friend,
    // AutoComplete,
  },
  data: () => ({
    data,
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
      if (this.search.length > 0) { 
      return this.searchedUsers.filter((option) => {
        return (
          option.user.handle
            .toString()
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) >= 0
        );
      });
      }
      else {
        return [];
      }
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
      this.searchedUsers = await GetBySearch(search);
    },
  },
};
</script>