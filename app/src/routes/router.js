import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import feed from '../pages/feed.vue'
import profilePage from '../pages/profilePage.vue'
import myRooms from '../pages/my-rooms.vue'
import meeting from '../pages/meeting.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'
import profileTimeLine from '../components/profileTimeLine.vue'

const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/feed',
        component: feed
    },
    {
        path: '/profile/:id',
        component: profilePage,
        children: [
            {
                path: "/timeline", component: profileTimeLine
            }
        ]
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