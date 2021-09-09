<template>
    <div class="chat-box" id="user-001" style="display: none;">
        <div class="chat-box-header">
            <div class="chat-box-header-profile" v-on:click="goToUserProfile(1)">
                <img src="../assets/img/test/girl1.png" class="avatar-p" alt="Foto de perfil de { user.name }">
                <h4 class="user-name-others"></h4>
            </div>
            <div class="header-chat-icons">
                <router-link :to="'/meeting/' + true"><i class="fas fa-video icon-clicable"></i></router-link>
                <router-link :to="'/meeting/' + false"><i class="fas fa-phone icon-clicable"></i></router-link>
                <i class="fas fa-times icon-clicable" v-on:click="closeChatBox()"></i>
            </div>
        </div>
        <div class="chat-box-body">
            <div class="message message-send">
                <div class="message-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi commodi aut, maxime obcaecati sunt fugiat odit voluptatem alias
                    <div class="message-utilities">
                        <h6 class="message-send-time">24/08/2021 17:33</h6>
                        <i class="fas fa-reply icon-clicable" v-on:click="replyMessage()"></i>
                    </div>
                </div>
                <div class="message-triangle message-send-triangle"></div>
            </div>
            <div class="message message-received">
                <div class="message-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi commodi aut, maxime obcaecati sunt fugiat odit voluptatem alias
                    <div class="message-utilities">
                        <h6 class="message-send-time">24/08/2021 17:33</h6>
                        <i class="fas fa-reply icon-clicable" v-on:click="replyMessage()"></i>
                    </div>
                </div>
                <div class="message-triangle message-received-triangle"></div>
            </div>
            <div class="message message-send">
                <div class="message-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi commodi aut, maxime obcaecati sunt fugiat odit voluptatem alias
                    <div class="message-utilities">
                        <h6 class="message-send-time">24/08/2021 17:33</h6>
                        <i class="fas fa-reply icon-clicable" v-on:click="replyMessage()"></i>
                    </div>
                </div>
                <div class="message-triangle message-send-triangle"></div>
            </div>
        </div>
        <div class="chat-box-footer">
            <form action="send-message" class="message-input">
                <input type="text" name="send-message" id="send-message" placeholder="Digite uma mensagem">
                <div class="input-icons">
                    <i class="fas fa-paperclip"></i>
                    <div class="send-audio-container">
                        <i style="display: block" class="fas fa-microphone icon-clicable microphone-icon" v-on:click="timerAudio()"></i>
                        <div class="container-audio-record" style="display: none;">
                            <i class="fas fa-times skip-audio icon-clicable"></i>
                            <h6 class="timer-audio"></h6>
                            <i class="fas fa-check send-audio icon-clicable"></i>
                        </div>
                    </div>
                </div>
            </form>                
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: "chatBox",
    methods: {
        closeChatBox() {
            $(".chat-box").hide();
        },
        replyMessage() {
            console.log("respondendo mensagem");
        },
        goToUserProfile(userId) {
            window.location = "/profile/" + userId
        }
    }
}
</script>

<style scoped>
.chat-box {
        min-width: 280px;
        max-width: 300px;
        height: 470px;
        margin: auto;
        position: fixed;
        bottom: 0;
        right: 0;
        border-radius: 1rem 1rem 0 0;
        background: var(--gray-high);
        transition: 0.5s min-width;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }

    .chat-box-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1.1rem;
        background: var(--yellow);
    }

    .chat-box-header-profile {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .chat-box-header-profile img {
        margin-right: .7rem;
    }

    .header-chat-icons {
        font-size: 1.2rem;
        display: flex;
    }
        .header-chat-icons i {
            margin-left: .8rem;
        }
    
    @media (max-width: 720px) {
        .header-chat-icons {
            font-size: 1rem;
        }
        .header-chat-icons i {
            margin-left: .6rem;
        }
    }

    .chat-box-body {
        height: 340px;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column-reverse;
        padding-left: .5rem 0 .5rem 1rem;
    }

    .microphone-icon {
        font-size: 1.5rem;
    }

    .input-icons {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        margin-right: 2.2rem;
    }

    .send-audio-container {
        margin-left: .8rem;
    }

    .container-audio-record {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        background: var(--white);
    }

    .skip-audio {
        color: var(--red);
        margin: 0 .7rem
    }

    .send-audio {
        color: var(--green);
        margin-left: .7rem;
    }
</style>