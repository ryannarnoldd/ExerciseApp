import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session'

import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import Profile from '../views/Profile.vue'
// import ContactUs from '../views/ContactUs.vue'
// import Friends from '../views/Friends.vue'
// import Help from '../views/Help.vue'
// import Login from '../views/Login.vue'
// import Nutrition from '../views/Nutrition.vue'
// import Register from '../views/Register.vue'
// import Reports from '../views/Reports.vue'
// import Settings from '../views/Settings.vue'
// import Share from '../views/Share.vue'
// import Track from '../views/Track.vue'
// import Trainers from '../views/Trainers.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed,
    meta: { requiresLogin: true }
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/Friends.vue'),
    meta: { requiresLogin: true}
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/log',
    name: 'Log',
    component: () => import('../views/Log.vue'),
    meta: { requiresLogin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: () => import('../views/Nutrition.vue'),
    // meta: { requiresLogin: true}
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresLogin: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Reports.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/Share.vue'),
    meta: { requiresLogin: true}
  },
  {
    path: '/track',
    name: 'Track',
    component: () => import('../views/Track.vue'),
    // meta: { requiresLogin: true}
  },
  {
    path: '/trainers',
    name: 'Trainers',
    component: () => import('../views/Trainers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !Session.user) {
    next('/login');
  } else {
    next();
  }
})

export default router
