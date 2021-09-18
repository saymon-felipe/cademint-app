<template>
    <div class="my-rooms">
        <div class="my-rooms-container">
            <h6 class="my-rooms-text">Minhas Salas</h6>
            <div class="rooms-container-list">
                <div class="room" v-for="groupId in findGroupOwner(this.mainUserId)" v-bind:key="groupId">
                    <div class="room-avatar">
                        <img :src="requireGroupImage(groupId)" class="avatar-p">
                    </div>
                    <div class="room-informations">
                        <div class="room-header">
                            <h6><strong>{{ findGroupName(groupId) }}</strong></h6> <!-- Dinâmico -->
                            <div class="header-icons">
                                <i :class="'fas ' + checkLockedGroup(groupId, 1) + ' ' + checkLockedGroup(groupId)"></i>
                                <i class="far fa-star favorite-room" v-on:click="favoriteRoom(groupId)"></i>
                                <i class="fas fa-cog" v-on:click="showRoomModal('group-' + groupId)"></i>
                            </div>
                        </div>
                        <div class="room-body">
                            <p>{{ getLenghtGroupMembers(groupId) }} participantes</p>
                        </div>
                        <div class="room-footer">
                            <div class="participants-avatar">
                                <div v-for="(groupMember, index) in getGroupMembers(groupId)" v-bind:key="index">
                                    <img v-if="index < 4" :src="requireImage(groupMember)" class="avatar-xxp">
                                </div>
                                <span v-if="getLenghtGroupMembers(groupId) > 4">+ {{ getLenghtGroupMembers(groupId) - 4 }}</span>
                            </div>
                            <div class="room-footer-icons">
                                <router-link to="/meeting/true">
                                    <i class="fas fa-sign-in-alt"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="rooms-modal" :id="'group-' + groupId">
                        <div class="rooms-modal-container">
                            <div class="rooms-configuration" >
                                <div class="rooms-configuration-header">
                                    <div class="room-avatar">
                                        <img :src="requireGroupImage(groupId)" class="avatar-m" v-on:click="showExpandedImg()">
                                        <div class="avatar-edit">
                                            <i class="fas fa-edit"></i>
                                        </div>
                                    </div>
                                <div class="room-title">
                                    <h6><strong>{{ findGroupName(groupId) }}</strong></h6> <!-- Dinâmico -->
                                    <p class="room-subtitle">{{ findGroup(groupId).description }}</p>
                                </div> 
                                </div>
                                <div class="rooms-configuration-body">
                                    <div class="members-list-container">
                                        <groupMembers 
                                        v-for="member in getGroupMembers(groupId)" 
                                        v-bind:key="member" 
                                        :memberAvatar="requireImage(member)" 
                                        :memberName="findName(member)"
                                        :memberRankingPosition="findUser(member).ranking_position"
                                        :memberId="member"
                                        />
                                    </div>
                                </div>
                                <div class="img-expanded">
                                    <i class="fas fa-times" v-on:click="hideImgExpanded()"></i>
                                    <img :src="requireGroupImage(groupId)">
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rooms-with-me">
            <h6 class="my-rooms-text">Salas que participo</h6>
            <div class="rooms-container-list">
                <div class="room" v-for="groupId2 in findGroupIparticipate(this.mainUserId)" v-bind:key="groupId2">
                    <div class="room-avatar">
                        <img :src="requireGroupImage(groupId2)" class="avatar-p">
                    </div>
                    <div class="room-informations">
                        <div class="room-header">
                            <h6><strong>{{ findGroupName(groupId2) }}</strong></h6> <!-- Dinâmico -->
                            <div class="header-icons">
                                <i :class="'fas ' + checkLockedGroup(groupId2, 1) + ' ' + checkLockedGroup(groupId2)"></i>
                                <i class="far fa-star favorite-room" v-on:click="favoriteRoom(groupId2)"></i>
                                <i class="fas fa-cog" v-on:click="showRoomModal('group-' + groupId2)"></i>
                            </div>
                        </div>
                        <div class="room-body">
                            <p>{{ getLenghtGroupMembers(groupId2) }} participantes</p>
                        </div>
                        <div class="room-footer">
                            <div class="participants-avatar">
                                <div v-for="(groupMember, index) in getGroupMembers(groupId2)" v-bind:key="index">
                                    <img v-if="index < 4" :src="requireImage(groupMember)" class="avatar-xxp">
                                </div>
                                <span v-if="getLenghtGroupMembers(groupId2) > 4">+ {{ getLenghtGroupMembers(groupId2) - 4 }}</span>
                            </div>
                            <div class="room-footer-icons">
                                <router-link to="/meeting/true">
                                    <i class="fas fa-sign-in-alt"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="rooms-modal" :id="'group-' + groupId2">
                        <div class="rooms-modal-container">
                            <div class="rooms-configuration" >
                                <div class="rooms-configuration-header">
                                    <div class="room-avatar">
                                        <img :src="requireGroupImage(groupId2)" class="avatar-m" v-on:click="showExpandedImg()">
                                        <div class="avatar-edit">
                                            <i class="fas fa-edit"></i>
                                        </div>
                                    </div>
                                <div class="room-title">
                                    <h6><strong>{{ findGroupName(groupId2) }}</strong></h6> <!-- Dinâmico -->
                                    <p class="room-subtitle">{{ findGroup(groupId2).description }}</p>
                                </div> 
                                </div>
                                <div class="rooms-configuration-body">
                                    <div class="members-list-container">
                                        <groupMembers 
                                        v-for="member in getGroupMembers(groupId2)" 
                                        v-bind:key="member" 
                                        :memberAvatar="requireImage(member)" 
                                        :memberName="findName(member)"
                                        :memberRankingPosition="findUser(member).ranking_position"
                                        :memberId="member"
                                        />
                                    </div>
                                </div>
                                <div class="img-expanded">
                                    <i class="fas fa-times" v-on:click="hideImgExpanded()"></i>
                                    <img :src="requireGroupImage(groupId2)">
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="rooms-overlay" v-on:click="hideRoomModal()"></div>
        
        <div class="overlay-img-expanded" v-on:click="hideImgExpanded()"></div>
    </div>
</template>

<script>
import $ from 'jquery'
import groupMembers from './groupMembers.vue'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: "myRoomsComponent",
    mixins: [globalMethods],
    methods: {
        favoriteRoom() {
            if ($("#favorite-room").hasClass("far")) {
                $("#favorite-room").removeClass("far");
                $("#favorite-room").addClass("fas");
                $("#favorite-room").addClass("favorite-room");
            } else {
                $("#favorite-room").removeClass("fas");
                $("#favorite-room").addClass("far");
                $("#favorite-room").removeClass("favorite-room");
            }
            $("#favorite-room").hasClass();
        },
        hideImgExpanded() {
            $(".img-expanded").css("top", "-100vh");
            $(".overlay-img-expanded").hide();
        },
        showExpandedImg() {
            $(".img-expanded").css("top", "-10vh");
            $(".overlay-img-expanded").show();
        },
        showRoomModal(id) {
            $("#" + id).css("display", "flex");
            $(".rooms-overlay").show();
        },
        hideRoomModal() {
            $(".rooms-modal").css("display", "none");
            $(".rooms-overlay").hide();
        }
    },
    components: {
        groupMembers
    }
}
</script>

<style scoped>
    .rooms-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1002;
        height: 240px;
        width: 25rem;
        transition: all 0.5s;
    }

    .rooms-modal-container {
        width: 400px;
        background: var(--white);
        border-radius: 10px;
        padding: 1rem;
        overflow: hidden;
    }

    .rooms-overlay {
        height: 100vh;
        width: 100vw;
        background: black;
        opacity: 0.7;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1001;
        display: none;
    }

    .my-rooms-text {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 800;
        margin-bottom: .5rem!important;
    }

    .my-rooms-container {
        width: 100%;
        padding: .5rem;
    }

    .my-rooms {
        width: 100%;
        background: var(--white);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem .3rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        margin-top: 1.3rem;
    }

    .rooms-with-me {
        margin-top: 1.5rem;
    }

    .room-avatar {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        cursor: pointer;
    }

    .opened-room {
        color: var(--green);
    }
    .closed-room {
        color: var(--red);
    }

    .room {
        display: flex;
        align-items: center;
        margin: .5rem auto;
        min-width: 240px;
        max-width: 350px;
        justify-content: space-between;
    }

    .rooms-container-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .room i {
        cursor: pointer;
    }

    .favorite-room {
        color: var(--yellow);
    }

    .room-header {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .room-footer {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .room-footer i {
        margin-right: .3rem;
    }

    .header-icons {
        margin-left: .4rem;
    }

    .header-icons i {
        margin: 0 .3rem;
    }

    .participants-avatar {
        display: flex;
        align-items: center;
    }

    .participants-avatar img {
        margin: 0 .1rem;
    }

    .participants-avatar span {
        margin-left: .1rem;
    }

    .room-informations {
        width: 100%;
        padding-left: .3rem;
    }

    .room-body p {
        margin-bottom: .3rem;
    }

    .avatar-edit {
        margin-left: -2rem;
        background: var(--gray-medium);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        padding: .3rem;
        width: 40px;
        height: 40px;
        border: 4px solid var(--white);
        cursor: pointer;
    }

    .avatar-edit:hover {
        background: var(--gray-medium-2);
    }

    .avatar-edit:active {
        background: var(--gray);
    }

    .rooms-configuration-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .room-title {
        width: 100%;
        margin-left: .5rem!important;
    }

        .room-title h6 {
            font-size: 1.3rem;
        }

    .room-subtitle {
        margin: 0!important;
    }

    .overlay-img-expanded {
        width: 100vw;
        height: 100vh;
        background: #000;
        opacity: 0.7;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1001;
        display: none;
    }

    .img-expanded {
        width: 30vw;
        transition: 0.5s transform;
        padding: .5rem 1rem 1rem;
        background: var(--white);
        text-align: right;
        flex-direction: column;
        border-radius: 10px;
        z-index: 1004;
        position: absolute;
        transition: 0.5s top;
        top: -100vh;
        right: 0;
        left: 0;
        margin: auto;
        height: 50vh;
    }

    @media (max-width: 1158px) {
       .img-expanded {
            width: 45vw;
        } 
    }

    @media (max-width: 850px) {
       .img-expanded {
            width: 55vw;
        } 
    }

    @media (max-width: 670px) {
       .img-expanded {
            width: 65vw;
        } 
    }
    
    .img-expanded i {
        margin-bottom: .5rem;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .img-expanded i:hover {
        color: var(--yellow);
    }

    .img-expanded i:active {
        color: var(--gray-low-2);
    }


    .img-expanded img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        border-radius: 10px;
    }

    .members-list-container {
        overflow-y: scroll;
        height: 120px;
        margin-top: .3rem;
    }
</style>