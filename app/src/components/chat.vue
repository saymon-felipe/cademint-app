<template>
    <div>
        <section class="chat">
            <div class="header-chat">
                <h4 v-on:click="goToUserProfile()">Amigos</h4>
                <div class="input-div">
                    <input type="text" name="search-amigos" id="search-amigos" placeholder="Procurar pessoas">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div class="container-friends">
                <div v-for="friendId in findUser(this.mainUserId).friends" v-bind:key="friendId" v-on:mouseenter="showCard(friendId)" v-on:mouseleave="hideCard(friendId)" class="container-user-chat" v-on:click="openChatBox(friendId)">
                    <div class="container-photo">
                        <img :src="requireImage(friendId)" class="avatar-p">
                        <div :class="'onlineOffline' + userIsOnline(friendId)"></div>
                    </div>
                    <div class="container-user-text" >
                        <div class="name-status">
                            <h5 class="user-name-others">{{ findName(friendId) }}</h5>
                            <h6 class="user-status">{{ getStatusText(friendId) }}</h6>
                        </div>
                        <h6 class="last-message"></h6>
                    </div>
                    <div class="time-last-message" title="Tempo desde a última mensagem">
                        {{ timeLastMessage() }}
                    </div>
                    <div class="user-card" :id="'card-user-' + friendId">
                        <div class="user-card-header">
                            <img :src="requireImage(friendId)" class="avatar-p-card clean" v-on:click="goToUserProfile(friendId)">
                            <div class="card-informations-header">
                                <div id="label-ranking" :class="'label-ranking-interaction ' + findRankingPosition(findUser(friendId).ranking_position, 1) + ' ' + 
                                testIfColorBlack('label-ranking-interaction ' + findRankingPosition(findUser(friendId).ranking_position, 1), false)" >
                                    <h6>#{{ findUser(friendId).ranking_position }} em interação</h6>
                                </div>
                                <h4 class="user-name-others" v-on:click="goToUSerProfile(friendId)">{{ findName(friendId) }}</h4>
                                <h6 class="user-idade">{{ findAge(friendId) }}</h6>
                            </div>
                        </div>
                        <div class="card-status-container">
                            <h6 class="user-status-complete">{{ getStatusText(friendId) }}</h6>
                        </div>
                        <div class="card-footer">
                            <router-link :to="'/meeting/' + true"><i class="fas fa-video"></i></router-link>
                            <router-link :to="'/meeting/' + false"><i class="fas fa-phone"></i></router-link>
                        </div>
                        <div class="user-card-triangle"></div>
                    </div>
                </div>
                <chatBox :friendId="friendId" />
            </div>
            <div class="hr"></div>
            <div class="container-groups">
                <div class="new-group">
                    <div class="new-group-avatar avatar-p-group">
                        <i class="fas fa-plus"></i>
                    </div>
                    <h6 class="user-name-others"><strong>Criar sala</strong></h6>
                </div>
                <div class="groups-list">
                    <div class="group" v-for="groupId in findUser(this.mainUserId).groups" v-bind:key="groupId">
                        <div class="group-avatar">
                            <img :src="requireGroupImage(groupId)" class="avatar-p-group">
                        </div>
                        <div class="name-last-message">
                            <h6 class="user-name-others"><strong>{{findGroupName(groupId)}}</strong></h6>
                            <h6 class="last-message"></h6>
                        </div>
                        <div class="time-last-message" title="Tempo desde a última mensagem">
                            {{ timeLastMessage() }}
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>
import $ from 'jquery'
import chatBox from '../components/chatBox.vue'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: 'Chat',
    mixins: [globalMethods],
    methods: {
        showCard(friendId) {
            setTimeout(() => {
                $(`#card-user-${friendId}`).css("display", "block");
            }, 200);
        },
        hideCard(friendId) {
            setTimeout(() => {
                $(`#card-user-${friendId}`).css("display", "none");
            }, 200);
        },
        openChatBox() {
            $(chatBox).show();
            
        },
        goToUserProfile(userId) {
           window.location = "/profile/" + userId
        }
    },
    components: {
        chatBox
    }
}
</script>

<style scoped>
    .groups-list {
        height: 70%;
        margin-top: 1rem;
        overflow-y: scroll;
    }

    .group {
        margin: .3rem 0;
        display: flex;
        align-items: center;
        position: relative;
    }

    .container-groups {
        width: 100%;
        max-height: 280px;
    }

    .new-group-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .new-group {
        display: flex;
        align-items: center;
    }

        .new-group h6, .group h6 {
            margin-left: .5rem!important;
        }

    .chat {
        position: fixed;
        top: 0;
        right: 0;
        width: 20%;
        min-width: 300px;
        max-width: 500px;
        height: 100vh;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.5s transform;
        border: 1px solid var(--gray-medium);
        padding: 0 10px;
        background: var(--gray-high);
    }

    @media (max-width: 720px) {
        .chat {
            min-width: 250px;
        }
    }

    @media (max-width: 520px) {
        .chat {
            min-width: 220px;
        }
    }

    /* HEADER CHAT */
    .header-chat {
        margin-top: 4.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header-chat h4 {
        font-size: 1.3rem;
        color: var(--gray-low);
    }
    
    @media (max-width: 850px) {
        .chat {
            transform: translateX(100vw);
        }
    }
    @media (min-width: 1159px) {
        .header-chat {
            margin-top: 2rem;
        }
    }


    /* PEOPLE CHAT */

    .container-user-chat {
        margin-top: 1.5rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .container-user-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: .5rem;
        width: 100%;
        cursor: pointer;
    }

    .container-user-text h6.last-message {
        font-size: .8rem;
        font-weight: 600;
        
    }

    .name-status {
        margin-bottom: .5rem;
    }

    .time-last-message {
        align-self: flex-end;
        position: absolute;
        right: 0;
        bottom: -.1rem;
        font-size: .7rem;
        font-weight: 600;
        width: 70px;
        cursor: default;
        text-align: center;
    }

    @media (max-width: 720px) {
        .input-div input::placeholder {
            font-size: .8rem;
        }
        .input-div i {
            font-size: .8rem;
        }
        .header-chat h4 {
            font-size: 1rem;
        }
        .user-name-others {
            font-size: .9em;
        }
        .user-status {
            font-size: .7em;
        }
        .time-last-message {
            font-size: .6rem;
        }
    }
    @media (max-width: 520px) {
        .time-last-message {
            width: 45px;
            right: 5px;
        }
        .container-user-text h6.last-message {
            font-size: .7rem;
        }
    }

    /* AVATAR */

    .avatar-p-card {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        object-fit: cover;
    }

    /* STATUS */

    .user-status {
        width: calc(100% - 4rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .last-message {
        width: calc(100% - 7.4rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }


    /* USER CARD */

    @media (max-width: 530px) {
        .user-card {
            display: none!important;
        }
    }

    .user-card {
        width: 15rem;
        border-radius: 1rem;
        position: absolute;
        left: -15.5rem;
        background: var(--white);
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        padding: 1rem;
        transition: 0.2s;
        display: none;
        z-index: 999;
    }
        .user-card::after {
            content: '';
            width: 2rem;
            height: 10rem;
            position: absolute;
            top: 0;
            right: -2rem;
        }

    .user-card-triangle {
        content: '';
        width: 10px;
        height: 10px; 
        border-top: 10px solid transparent;
        border-bottom:10px solid transparent;
        border-left: 10px solid var(--white);
        overflow: hidden;
        position: absolute;
        right: -10px;
        top: 45%

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

    .container-friends {
        height: 50%;
        width: 100%;
        margin: .5rem 0;
        overflow-y: scroll;
        overflow-x: hidden;
    }

</style>

