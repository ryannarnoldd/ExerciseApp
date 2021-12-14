<template>
    <div class="buttons" v-if="!Session.user">
        <router-link class="button is-dark is-tab"  to="/register" active-class="is-active" @click="register">
            <strong>Register</strong>
        </router-link>
        <router-link class="button is-light is-tab"  to="/login" active-class="is-active" @click="login">
            Log in
        </router-link>
    </div>
    <div v-else>
        Welcome, {{name}}!
    </div>
</template>

<script>
import Session from "../services/session"
export default {
    data: ()=>({
        Session
    }),
    methods: {
        register() {
        },
        login() {
            this.Session.Login();
        }
    },
    computed:{
        name() {
            return this.Session.user.firstName;
        }
    }
}
</script>

<style>

</style>