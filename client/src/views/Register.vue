<template>
    <div class="container is-max-desktop">
        <h2 class="title is-2 has-text-centered is-capitalized">Get Started by Creating Your Account!</h2>
        <h6 class="subtitle has-text-centered">Let's create your Fitizen account and take the first steps towards happiness and health.</h6>
        <form @submit.prevent="register()">

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Handle</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" placeholder="What do you want everyone to search you by... @handle" v-model="handle">
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
                            <input class="input" type="fname" placeholder="First Name" v-model="firstName">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="lname" placeholder="Last Name" v-model="lastName">
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
                            <input class="input" type="email" placeholder="Email" v-model="email">
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
                            <input class="input" type="password" placeholder="Password">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="password" placeholder="Confirm Password" v-model="password">
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
                            <input class="input" type="url" placeholder="Choose a nice URL profile picture!" v-model="pic">
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-dark is-centered">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Session from "../services/session";

export default {
    data: ()=>({
        firstName: null,
        lastName: null,
        handle: null,
        pic: null,
        password: null,
        isAdmin: false,
        email: null,
        following: [{ handle: '@vp', isApproved: true },{ handle: '@JewPaltz', isApproved: true },{ handle: '@johnsmith', isApproved: true } ],
        Session 
    }),
    methods: {
        register() {

            this.Session.Register({ 
                "firstName": this.firstName,
                "lastName": this.lastName,
                "handle": this.handle,
                "pic": this.pic,
                "password": this.password,
                "isAdmin": this.isAdmin,
                "email": this.email,
                "following": this.following
            });
        }
    }
}
</script>