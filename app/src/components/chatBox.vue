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
        min-width: 290px;
        max-width: 330px;
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

    .chat-box-footer {
        height: 2.55rem;
        margin-top: .8rem;
        display: flex;
        justify-content: center;
    }

    .message-input {
        width: 95%;
        height: 90%;
        padding: 0 .5rem;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .chat-box-footer input {
        width: 100%;
        height: 100%;
        border: 1px solid var(--gray-medium);
        border-radius: 10px;
    }
    .chat-box-footer input::placeholder {
        position: relative;
        left: 2rem
    }

    .message {
        padding: .7rem .7rem 1.5rem .7rem;
        margin-top: 1rem;
        width: 90%;
        font-size: .9rem;
        border-radius: 7px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .message-send {
        background: var(--gray-medium);
        right: -10px;
    }
    .message-received {
        background: var(--green);
        left: 15px;
    }
    .message-triangle {
        content: '';
        width: 0;
        height: 0; 
        overflow: hidden;
        position: relative;
    }
    .message-send-triangle {
        border-top: 5px solid transparent;
        border-bottom:5px solid transparent;
        border-left: 9px solid var(--gray-medium);
        right: -19px;
    }
    .message-received-triangle {
        border-top: 5px solid transparent;
        border-bottom:5px solid transparent;
        border-right: 9px solid var(--green);
        order: -1;
        left: -19px;
    }

    .message-send-time {
        font-size: .7rem;
        font-weight: 600;
    }
    
    .message-utilities {
        position: relative;
        bottom: -.8rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 720px) {
        .chat-box {
            min-width: 50vw;
            height: 400px;
        }
        .chat-box-body {
            height: 278px;
        }
    }
    @media (max-width: 520px) {
        .chat-box {
            min-width: 85vw;
        }
        .chat-box-footer input::placeholder {
            font-size: .8rem;
        }
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