<template>
  <div class="container is-max-desktop">
    <h2 class="title is-2 has-text-centered is-capitalized">
      Edit your profile!
    </h2>
    <h6 class="subtitle has-text-centered">
      See any information you have about yourself that you want changed?
      <br>
      This is the place!!
    </h6>
    <form @submit.prevent="$emit('updatedChanges')">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Handle</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="What do you want everyone to search you by... @handle"
                v-model="handle"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <!-- Place a text box for first name, but put session.user.firstName already in there, using Vue. -->
              <input
                class="input"
                id="firstName"
                type="text"
                placeholder="First Name"
                v-model="firstName"
              />
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input"
                type="lname"
                placeholder="Last Name"
                v-model="lastName"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="password" placeholder="New Password" />
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input"
                type="password"
                placeholder="Confirm New Password"
                v-model="password"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Profile Pic</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input"
                type="url"
                placeholder="Choose a nice URL profile picture!"
                v-model="pic"
              />
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-dark is-centered" @click="saveChanges">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
 import session from "../services/session";
// import { Unlog, GetAllLog, GetLog } from "../services/exercises";
// import { Delete, GetFeed, GetWall } from "../services/posts";
// import { Update } from "../services/users";

export default {
    components: {
    },
    data() {
        return {
            handle: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            pic: '',
        };
    },
    props : {
        user: Object
    },
    async mounted() {
        this.handle = session.user.handle;
        this.firstName = session.user.firstName
        this.lastName = session.user.lastName
        this.email = session.user.email
        this.password = session.user.password
        this.pic = session.user.pic

    },
    methods: {
        saveChanges () {
            // session.user.handle = this.handle;
            // session.user.firstName = this.firstName
            // session.user.lastName = this.lastName
            // session.user.email = this.email
            // session.user.password = this.password
            // session.user.pic = this.pic

            // Update(session.user.user_id, session.user)
            
            this.$router.push('/profile')


            
        }
    }
};
</script>

