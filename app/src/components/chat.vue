<template>
    <div>
        <section class="chat">
            <div class="header-chat">
                <h4>Amigos</h4>
                <div class="input-div">
                    <input type="text" name="search-amigos" id="search-amigos" placeholder="Procurar pessoas">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div v-on:mouseover="showCard()" v-on:mouseout="hideCard()" class="container-user-chat" id="user-001" v-on:click="openChatBox()">
                <div class="container-photo">
                    <img src="../assets/img/test/girl1.png" class="avatar-p">
                    <div class="onlineOffline"></div>
                </div>
                <div class="container-user-text" >
                    <h5 class="user-name-others"></h5>
                    <h6 class="user-status"></h6>
                    <h6 class="last-message"></h6>
                </div>
                <div class="time-last-message" title="Tempo desde a última mensagem">
                </div>
                <div class="user-card">
                    <div class="user-card-header">
                        <img src="../assets/img/test/girl1.png" class="avatar-p-card clean" v-on:click="goToUSerProfile(1)">
                        <div>
                            <div class="label-ranking-interaction">
                                <h6></h6>
                            </div>
                            <h4 class="user-name-others" v-on:click="goToUSerProfile(1)"></h4>
                            <h6 class="user-idade"></h6>
                        </div>
                    </div>
                    <div class="card-status-container">
                        <h6 class="user-status-complete"></h6>
                    </div>
                    <div class="card-footer">
                        <router-link :to="'/meeting/' + true"><i class="fas fa-video"></i></router-link>
                        <router-link :to="'/meeting/' + false"><i class="fas fa-phone"></i></router-link>
                    </div>
                    <div class="user-card-triangle"></div>
                </div>
            </div>
            <chatBox />
        </section>
    </div>
</template>

<script>
import $ from 'jquery'
import chatBox from '../components/chatBox.vue'

export default {
    name: 'Chat',
    methods: {
        showCard() {
            setTimeout(() => {
                $(".user-card").show();
            }, 200);
        },
        hideCard() {
            setTimeout(() => {
                $(".user-card").hide();
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
        overflow-y: scroll;
        overflow-x: hidden;
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
    }

    .container-user-text {
        position: relative;
        bottom: 8px;
        left: -8px;
        width: 100%;
        cursor: pointer;
    }

    .container-user-text h6.last-message {
        font-size: .8rem;
        font-weight: 600;
        position: relative;
        bottom: -.5rem;
    }

    .time-last-message {
        align-self: flex-end;
        position: absolute;
        right: 0;
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
        width: calc(100% - 7rem);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }


    /* USER CARD */

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
    .clean {
        border: none;
    }

    .user-card-header {
        display: flex;
        align-items: center;
        justify-content: space-around;
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

</style>

