<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item is-tab is-size-5 has-text-weight-bold is-italic" to="/" active-class="is-active" exact>Fitizen</router-link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive}" @click="isActive = !isActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
            <div class="navbar-start">
                <router-link class="navbar-item is-tab" to="/track" active-class="is-active">Track</router-link>
                <router-link class="navbar-item is-tab" to="/nutrition" active-class="is-active">Nutrition</router-link>
                <router-link class="navbar-item is-tab" to="/reports" active-class="is-active">Reports</router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Social</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item is-tab" to="/share" active-class="is-active">Share</router-link>
                        <router-link class="navbar-item is-tab" to="/feed" active-class="is-active">Feed</router-link>
                        <router-link class="navbar-item is-tab" to="/friends" active-class="is-active">Friends</router-link>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">More</a>
                    <div class="navbar-dropdown">
                        <router-link class="navbar-item is-tab" to="/trainers" active-class="is-active">Trainers</router-link>
                        <router-link class="navbar-item is-tab" to="/settings" active-class="is-active">Settings</router-link>
                        <router-link class="navbar-item is-tab" to="/help" active-class="is-active">Help</router-link>
                        <hr class="navbar-divider">
                        <router-link class="navbar-item is-tab" to="/contactus" active-class="is-active">Contact Us</router-link>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <login-badge />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import LoginBadge from './LoginBadge.vue'

export default {
    data() {
        return {
            isActive: false
        }
    },
    components: {
        LoginBadge
    }

}
</script>

<style>

</style>