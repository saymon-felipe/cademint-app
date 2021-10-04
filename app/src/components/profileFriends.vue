<template>
    <div class="friends-container">
        <div class="friends-search">
            <div class="input-div">
                <input type="text" name="friendsSearch" id="friends-search" placeholder="Procurar amigos">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="friends-inner">
            <div class="friend" v-for="(friend, index) in findUser(userId).friends" v-bind:key="index" :id="'friend-' + index" v-on:click="expandFriendContainer(index)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img :src="requireImage(friend)" class="avatar-p" draggable="false">
                    </div>
                    <div>
                        <h5 class="user-name-others">{{ findName(friend) }}</h5>
                    </div>
                </div>
                <div class="containerFriends">
                    <div class="about-friend-container">
                        <div class="friend-informations-container">
                            <div class="about-inner">
                                <div class="about-friend selected" v-on:click="showAboutFriend()">
                                    <i class="fas fa-info-circle"></i>
                                </div>
                                <div class="about-friend-inner">
                                    <div class="birthday">
                                        <div class="about-icon">
                                            <i class="fas fa-birthday-cake"></i>
                                        </div>
                                        <span>{{ returnFormatedDate(findUser(friend).birthday) }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ findUser(friend).schooling }} em <strong>{{ findUser(friend).institution }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ formatTel(findUser(friend).tel) }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ findUser(friend).from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ findUser(friend).live }}</strong></span>
                                    </div>
                                </div>
                            </div>
                            <div class="mutual-friends-container">
                                <div class="mutual-friends" v-on:click="showMutualFriends()">
                                    <i class="fas fa-user-friends"></i>
                                </div>
                                <div class="mutual-friends-inner">
                                    <h6><strong>Amigos em comum</strong></h6>
                                    <div class="friends-search">
                                        <div class="input-div">
                                            <input type="text" name="friendsSearch" id="people-search" placeholder="Procurar amigos">
                                            <i class="fas fa-search"></i>
                                        </div>
                                    </div>
                                    <div class="mutual-friends-list">
                                        <div class="mutual-friend" v-for="mutualFriend in getMutualFriends(userId, friend)" v-bind:key="mutualFriend" v-on:click="goToUserProfile(mutualFriend)">
                                            <img :src="requireImage(mutualFriend)" class="avatar-p" draggable="false">
                                            <h6><strong>{{ findName(mutualFriend) }}</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: "profileFriends",
    mixins: [globalMethods],
    methods: {
        expandFriendContainer(friend) {
            this.resetFriendContainer();
            var containerExpanded = $("#friend-" + friend + " .containerFriends");
            containerExpanded.css("display", "block");
        },
        showAboutFriend() {
            $(".mutual-friends").removeClass("selected");
            $(".about-friend").addClass("selected");
            $(".mutual-friends-inner").css("z-index", "-1");
            $(".about-friend-inner").css("z-index", "1");
        },
        showMutualFriends() {
            $(".about-friend").removeClass("selected");
            $(".mutual-friends").addClass("selected");
            $(".about-friend-inner").css("z-index", "-1");
            $(".mutual-friends-inner").css("z-index", "1");
        },
        resetFriendContainer() {
             var containerExpanded = document.querySelectorAll(".containerFriends");
             for (let i = 0; i < containerExpanded.length; i++) {
                 containerExpanded[i].style = "display: none;";
             }
        }
    },
    props: ["userId"]
}
</script>

<style scoped>

    .container-photo {
        margin-right: 1rem;
    }

    .friends-inner {
        margin-top: 1.5rem;
        padding-right: .5rem;
        max-height: 300px;
        overflow-y: scroll;
    }

    .friend {
        margin: .5rem 0;
    }

    .friends {
        margin: .6rem;
    }

    .friend-header {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .friend-header .user-status {
        display: none;
    }

    .containerFriends {
        display: none;
        margin-bottom: 1rem;
        height: 180px;    
    }

    .birthday, .relationship, .schooling, .telephone, .from, .live-in {
        margin: .3rem 0;
        display: flex;
        align-items: center;
    }

    .about-icon {
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .6rem;
    }

    .about-inner {
        display: flex;
        align-items: flex-start;
    }

    .about-friend, .mutual-friends {
        font-size: 1.3rem;
        padding: .6rem .8rem;
        margin-top: 1rem;
        z-index: 3;
        cursor: pointer;
    }

    .about-friend-container {
        height: 100%;
    }

    .mutual-friends {
        margin-top: 5rem;
    }

    .selected {
        background: var(--white);
        border-radius: 10px 0 0 10px;
        box-shadow: -5px 0px 10px -2px rgba(0,0,0,0.2);
    }

    .mutual-friends-inner, .about-friend-inner {
        background: var(--white);
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        border-radius: 10px;
        padding: 1rem;
        position: relative;
        width: 85%;
    }

    .friend-informations-container {
        margin-left: 1rem;
        margin-top: 1.3rem;
        height: 100%;
    }

    .mutual-friends-container {
        display: flex;
        align-items: flex-start;
        margin-left: -.3rem;
        width: 100%;
        height: 100%;
        margin-top: -11.5rem;
    }

    .mutual-friends-inner {
        z-index: -1;
        max-height: 250px;
        overflow: hidden;
        height: 100%;
    }

        .mutual-friends-inner h6 {
            text-align: center;
        }

    .mutual-friends-list {
        margin: .5rem .6rem 0;
        max-height: 90px;
        overflow-y: scroll;
    }

    .mutual-friend {
        display: flex;
        align-items: center;
        margin: .3rem 0;
        cursor: pointer;
    }

        .mutual-friend h6 {
            margin-left: .8rem!important;
        }

    .friends-search {
        margin-top: -.7rem;
    }
</style>