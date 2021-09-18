<template>
    <div class="user-card">
        <div class="user-card-container">
            <div class="user-card-header">
                <img :src="requireImage(cardId)" class="avatar-p-card clean" v-on:click="goToUserProfile(cardId)">
                <div class="card-informations-header">
                    <div id="label-ranking" :class="'label-ranking-interaction ' + findRankingPosition(findUser(cardId).ranking_position, 1) + ' ' + 
                    testIfColorBlack('label-ranking-interaction ' + findRankingPosition(findUser(cardId).ranking_position, 1), false)" >
                        <h6>#{{ findUser(cardId).ranking_position }} em interação</h6>
                    </div>
                    <h4 class="user-name-others" v-on:click="goToUSerProfile(cardId)">{{ findName(cardId) }}</h4>
                    <h6 class="user-idade">{{ findAge(cardId) }}</h6>
                </div>
            </div>
            <div class="card-status-container">
                <h6 class="user-status-complete">{{ getStatusText(cardId) }}</h6>
            </div>
            <div class="card-footer">
                <router-link :to="'/meeting/' + true"><i class="fas fa-video"></i></router-link>
                <router-link :to="'/meeting/' + false"><i class="fas fa-phone"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: "userCard",
    props: ["cardId"],
    mixins: [globalMethods]
}
</script>

<style scoped>

    .user-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 20rem;
        height: 15rem;
        border-radius: 1rem;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: var(--white);
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        padding: 1rem;
        transition: 0.2s;
        z-index: 1000;
    }
        .user-card::after {
            content: '';
            width: 2rem;
            height: 10rem;
            position: absolute;
            top: 0;
            right: -2rem;
        }

    .card-informations-header {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    

    .clean {
        border: none;
    }

    .user-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user-idade {
        font-size: .8rem;
    }

    .card-status-container {
        margin-top: .8rem;
    }
        .card-status-container h6 {
            font-size: .9rem;
        }
    .user-card .card-footer {
        background: transparent;
        padding: .7rem 0 0;
        margin-top: .7rem;
        display: flex;
        justify-content: center;
    }
    .user-card .card-footer i {
        font-size: 1.3rem;
        margin-left: 1rem;
    }

    .avatar-p-card {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>