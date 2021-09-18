<template>
    <div class="member" v-on:click="goToUserProfile(memberId)">
        <img :src="memberAvatar" :class="'avatar-p ' + findRankingPosition(memberRankingPosition)">
        <h6 v-on:click="findUser()">{{ memberName }}</h6>
        <div class="member-expanded-overlay" v-on:click="contractMember()"></div>
    </div>
</template>
<script>
import $ from 'jquery'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: "groupMembers",
    props: ["memberAvatar", "memberName", "memberId", "memberRankingPosition"],
    mixins: [globalMethods],
    methods: {
        goToUserProfile(userId) {
            window.location = "/profile/" + userId
        },
        contractMember() {
            $(".member-expanded").hide();
        }
    }
}
</script>
<style scoped>
    .member-expanded-overlay {
        width: 100vw;
        height: 100vh;
        background: black;
        opacity: 0.7;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: none;
    }

    .member-expanded {
        width: 30rem;
        height: 150px;
        padding: 1rem;
        background: var(--white);
        border-radius: 10px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
    }

    .member h6 {
        font-weight: 600;
        margin-left: .5rem!important;
    }

    .member {
        display: flex;
        align-items: center;
        margin: .5rem 0;
    }
</style>