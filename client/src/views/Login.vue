<template>
  <div class="container is-max-desktop">
    <h2 class="title is-2 has-text-centered is-capitalized">Welcome Back!</h2>
    <h6 class="subtitle has-text-centered">
      Let's sign you back in and get focused on your health.
    </h6>

    <form @submit.prevent="login()">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="username"
                placeholder="Username"
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
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <router-link to="/register">Don't have an account?</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-dark is-centered">Log In</button>
            </div>
          </div>
          <button class="button is-success" type="button" @click="loginGoogle">
            Login with Google
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data: () => ({
    email: null,
    password: null,
    Session,
  }),
  methods: {
    login() {
      this.Session.Login(this.email, this.password);
    },
  },
};

// /* global gapi */
// let auth = null;
// const tag = document.createElement('script');
// tag.id = "google-auth-script";
// tag.src = 'https://apis.google.com/js/platform.js';

// document.head.append(tag);

// tag.onload = () => {
//     gapi.load('auth2', function() {
//         gapi.auth2.init({
//             client_id: process.env.(didn't add this to .env)
//         }).then()
//             .then(()=> {
//             auth = gapi.auth2.getAuthInstance();

//         })

//     });
// }
</script>