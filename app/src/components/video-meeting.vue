<template>
    <div class="video-meeting">
        <headerOptions />
        <div class="video-meeting-container">
            <div class="video-meeting-header">
                <div class="room-avatar">
                    <img src="../assets/img/test/ahri13.jpg" class="avatar-p">
                </div>
                <div class="room-informations">
                    <h6><strong>Ahri Lovers</strong></h6> <!-- Dinâmico -->
                    <p>{{ userInConference }} participantes em video chamada</p>
                    <div class="participants-avatar">
                        <div class="in-conference">
                            <img src="../assets/img/test/img-user-test-1.jpg" class="avatar-xp">
                            <img src="../assets/img/test/girl1.png" class="avatar-xp">
                        </div>
                        <div class="out-conference">
                            <img src="../assets/img/test/girl3.png" class="avatar-xp">
                            <img src="../assets/img/test/girl4.jpg" class="avatar-xp">
                            <span v-if="participantsOffline > 2">{{ participantsOffline - 2 }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-meeting-body">
                <div class="video">
                    <img src="../assets/img/test/girl1.png" class="meeting">
                    <div class="meeting-controls">
                        <div class="control-item microphone" v-on:click="muteUnmute()">
                            <i class="fas fa-microphone" id="mic"></i>
                        </div>
                        <div class="microphone-more-options" v-on:click="microphoneMoreOptions()">
                            <i class="fas fa-caret-down"></i>
                        </div>
                        <div class="more-options-container">
                            <div class="more-options-inner">
                                <div class="mic-list" id="mic1"> 
                                    <i class="fas fa-check"></i>
                                    <p>Microfone 1 teste teste teste</p>
                                </div>
                                <div class="mic-list" id="mic2"> 
                                    <p>Microfone 2</p>
                                </div>
                                <div class="mic-list" id="mic3"> 
                                    <p>Microfone 3</p>
                                </div>
                                <div class="mic-list" id="mic3"> 
                                    <p>Microfone 3</p>
                                </div>
                                <div class="mic-list" id="mic3"> 
                                    <p>Microfone 3</p>
                                </div>
                            </div>
                        </div>
                        <div class="control-item camera" v-on:click="onOffCamera()">
                            <i class="fas fa-video" id="cam"></i>
                        </div>
                        <div class="video-more-options" v-on:click="cameraMoreOptions()">
                            <i class="fas fa-caret-down"></i>
                        </div>
                        <div class="more-options-container">
                            teste
                        </div>
                        <div class="control-item videofilter">
                            <i class="fas fa-magic"></i>
                        </div>
                        <div class="control-item add-media">
                            <i class="fas fa-film"></i>
                        </div>
                        <div class="control-item mute">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="control-item more-options">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <div class="control-item config">
                            <i class="fas fa-cog"></i>
                        </div>
                    </div>
                    <div class="my-video">
                        <img src="../assets/img/test/img-user-test-1.jpg" class="self-meeting">
                    </div>
                </div>
                <div class="room-options">
                    <button class="end-meeting">
                        <i class="fas fa-phone"></i>
                        <span>Desligar</span>
                    </button>
                    <button class="invite-to-room"> 
                        <i class="fas fa-plus"></i>
                        <span>Convidar</span>
                    </button>
                    <button class="lock-unlock-room unlock" v-on:click="lockUnlockRoom()">
                        <i class="fas fa-lock-open" id="lock-unlock-icon"></i>
                        <span class="lock-unlock">Aberta</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import headerOptions from "../components/headerOptions.vue"

export default {
    name: 'videoMeeting',
    data() {
        return {
            video: this.$route.params.video
        }
    },
    components: {
        headerOptions
    },
    props: ["userInConference", "participantsOffline"],
    methods: {
        lockUnlockRoom() {
            var button = $(".lock-unlock-room");
            var icon = $("#lock-unlock-icon");
            var text = $(".lock-unlock");
            button.toggleClass("lock");
            if (button.hasClass("lock")) {
                icon.removeClass("fa-lock-open");
                icon.addClass("fa-lock");
                icon.css("transform", "translateX(350%)");
                
                setTimeout(() => {
                        text.css("transform", "translateX(-55%)"); 
                        text.html("Fechada");
                    }, 500);
                text.css("opacity", 0);
                setTimeout(() => { text.css("opacity", 1); }, 500);
            } else {
                icon.removeClass("fa-lock");
                icon.addClass("fa-lock-open");
                icon.css("transform", "translateX(0)");
                
                setTimeout(() => {
                        text.css("transform", "translateX(0)");
                        text.html("Aberta");
                    }, 500);
                text.css("opacity", 0);
                setTimeout(() => { text.css("opacity", 1); }, 500);
            }
        },
        muteUnmute() {
            $("#mic").toggleClass("fa-microphone-slash");
            
        },
        onOffCamera() {
            $("#cam").toggleClass("fa-video-slash");
        },
        microphoneMoreOptions() {
            console.log("microfone mais opções");
        },
        cameraMoreOptions() {
            console.log("camera mais opções");
        }
    }
}
</script>

<style scoped>
    .video-meeting {
        width: 100%;
    }

    .video-meeting-container {
        margin-top: 1.3rem;
        overflow: hidden;
        background: var(--white);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    .video-meeting-header {
        display: flex;
        align-items: center;
        align-self: flex-start;
    }

    .room-avatar {
        margin-right: .7rem;
    }

    .room-informations p {
        font-size: .8rem;
        margin-bottom: .3rem;
    }

    .participants-avatar {
        display: flex;
        align-items: center;
    }

    .in-conference {
        margin-right: .5rem;
    }

    .out-conference img {
        opacity: 0.8;
    }

    .out-conference span {
        margin-left: .2rem;
    }

    .in-conference img, .out-conference img {
        margin: 0 .1rem
    }

    .video-meeting-body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .video {
        width: 100%;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img.meeting {
        width: 100%;
        max-height: 50vh;
        object-fit: cover;
        margin-left: -.5rem;
    }

    .end-meeting i {
        transform: rotate(-135deg);
    }

    .room-options i {
        margin: 0 .5rem;
        font-size: 1.5rem;
    }

    .room-options span {
        font-size: 1rem;
        margin: 0 .5rem;
    }

    .room-options i, .room-options span {
        color: var(--white);
    }

    .room-options {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 1rem;
    }

    .room-options button {
        display: flex;
        align-items: center;
        padding: .5rem 1.5rem;
        margin: 0 .3rem;
        border-radius: 30px;
        border: none;
        width: 10rem;
    }

    .end-meeting {
        background: var(--red);
    }

    .invite-to-room {
        background: var(--blue);
    }

    .lock-unlock {
        transition: 0.4s transform;
        transition: 0.2s opacity;
    }

    .unlock {
        background: var(--green);
    }

    .lock {
        background: var(--yellow);
    }

    .lock-unlock-room {
        transition: 0.4s background;
    }

    .lock-unlock-room i, .lock-unlock-room span {
        color: var(--gray-low);
    }
    
    #lock-unlock-icon {
        transition: 0.4s transform;
    }

    .meeting-controls {
        background: rgba(0,0,0,0.7);
        display: flex;
        min-width: 55px;
        flex-direction: column;
        align-items: center;
        margin-right: -4rem;
        padding: 1rem .3rem;
        border-radius: 10px;
        order: -1;
        z-index: 1;
    }

    .meeting-controls i {
        color: var(--white);
        font-size: 1.3rem;
    }

    .control-item {
        padding: .6rem;
        margin: .2rem 0;
        width: 100%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }

    .control-item:hover {
        background: rgba(255,255,255,0.2)
    }

    .microphone, .camera {
        margin: .5rem 0;
    }

    .microphone-more-options, .video-more-options {
        margin-top: -1.3rem;
        margin-right: -1rem;
    }

    .microphone-more-options i, .video-more-options i {
        font-size: .8rem;
        background: rgb(61, 61, 61);
        border-radius: 3px;
        width: .8rem;
        height: .8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .microphone-more-options i:hover, .video-more-options i:hover {
        background: var(--gray-high);
        color: var(--gray-low);
    }

    .self-meeting {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .my-video {
        width: 12rem;
        height: 8rem;
        margin-left: -13.3rem;
        margin-bottom: -13rem;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
    }

    .more-options-container {
        background: rgba(0,0,0,0.7);
        border-radius: 10px;
        margin-top: -2.7rem;
        margin-right: -16rem;
        color: var(--white);
        display: flex;
        flex-direction: column;
        width: 12rem;
        max-height: 90px;
        overflow: hidden;
    }

    .more-options-inner {
        margin: .5rem;
        overflow-y: scroll;
    }

    .mic-list {
        display: flex;
        align-items: center;
        width: 100%;
    }
    .mic-list i {
        font-size: .9rem;
    }

    .mic-list p {
        margin: 0;
        margin-left: .7rem;
        white-space: nowrap;
        text-overflow: clip;
        overflow: hidden;
    }
</style>
