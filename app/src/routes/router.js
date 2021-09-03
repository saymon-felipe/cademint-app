import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import myFeed from '../pages/my-feed.vue'
import profile from '../pages/profile.vue'
import myRooms from '../pages/my-rooms.vue'
import meeting from '../pages/meeting.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'

const routes = [
    {
        path: '/',
        component: myFeed
    },
    {
        path: '/feed',
        component: myFeed
    },
    {
        path: '/profile/:id',
        component: profile
    },
    {
        path: '/my-rooms',
        component: myRooms
    },
    {
        path: '/meeting/:video', 
        component: meeting
    },
    {
        path: '/login', 
        component: login
    },
    {
        path: '/register', 
        component: register
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;