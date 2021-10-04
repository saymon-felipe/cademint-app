<template>
    <div class="video-meeting-principal">
        <headerOptions />
        <div class="video-meeting-container">
            <div v-if="endMeeting == 0" class="video-meeting-container-inner">
                <div class="video-meeting-header">
                    <div class="video-meeting-header-inner">
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
                    <span class="time-duration-container"><strong>Tempo Decorrido: </strong><span class="time-duration"></span></span>
                </div>
                <div class="video-meeting-body">
                    <div class="video">
                        <img src="../assets/img/test/girl1.png" class="meeting" v-on:click="expandVideoMeeting()">
                        <div class="lateral-videos">
                            <div class="my-video">
                                <img src="../assets/img/test/img-user-test-1.jpg" class="self-meeting">
                            </div>
                            <div class="my-video">
                                <img src="../assets/img/test/img-user-test-1.jpg" class="self-meeting">
                            </div>
                            <div class="my-video">
                                <img src="../assets/img/test/img-user-test-1.jpg" class="self-meeting">
                            </div>
                            <div class="my-video">
                                <img src="../assets/img/test/img-user-test-1.jpg" class="self-meeting">
                            </div>
                        </div>
                        <div class="container-controls-hover" v-on:mouseenter="showMeetingControls()" v-on:mouseleave="hideMeetingControls()">
                            <div class="meeting-controls">
                                <div class="control-item microphone" v-on:click="muteUnmute()">
                                    <i class="fas fa-microphone" id="mic"></i>
                                </div>
                                <div class="microphone-more-options" v-on:click="microphoneMoreOptions()">
                                    <i class="fas fa-caret-down"></i>
                                </div>
                                <div class="more-options-container more-options-mic">
                                    <div class="more-options-inner">
                                        <div class="mic-list" :id="'mic' + mic.id" v-for="mic in mics" v-bind:key="mic.id" v-on:click="selectMicrophone(mic.id)"> 
                                            <i class="fas fa-check select-microphone"></i>
                                            <p>{{ mic.name }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="control-item camera" v-on:click="onOffCamera()">
                                    <i class="fas fa-video" id="cam"></i>
                                </div>
                                <div class="video-more-options" v-on:click="cameraMoreOptions()">
                                    <i class="fas fa-caret-down"></i>
                                </div>
                                <div class="more-options-container more-options-cam">
                                    <div class="more-options-inner">
                                        <div class="cam-list" :id="'cam' + cam.id" v-for="cam in cams" v-bind:key="cam.id" v-on:click="selectCamera(cam.id)"> 
                                            <i class="fas fa-check select-camera"></i>
                                            <p>{{ cam.name }}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="control-item videofilter">
                                    <i class="fas fa-magic"></i>
                                </div> Versão futura -->
                                <div class="control-item add-media" v-on:click="openConfigurations()">
                                    <i class="fas fa-film"></i>
                                </div>
                                <div class="control-item mute" v-on:click="muteUnmuteAudio()">
                                    <i class="fas fa-volume-up"></i>
                                </div>
                                <!--<div class="control-item more-options">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div> Versão Futura -->
                                <div class="control-item config">
                                    <i class="fas fa-cog"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="configuration-other-controls">
                        <div class="configuration-others-header">
                            <div class="close-configurations" v-on:click="closeConfigurations()">
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="configuration-other-container"> 
                            <div class="video-filter-configuration"><!-- Future version -->

                            </div>
                            <div class="configuration-add-media" v-on:click="addMedia()" v-if="addMediaOpened == 1">
                                <div class="url-video">
                                    <div class="url-video-icon">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </div>
                                    <input type="text" name="url-video" id="url-video" placeholder="Url do video" v-on:keyup="showAddVideoButton()">
                                    <button class="add-video-button" v-on:click="searchLinkToAddMedia()">Adicionar video</button>
                                    <button class="remove-video-button" v-on:click="removeVideoIframe()">Remover video</button>
                                </div>
                                <iframe controls="false" width="400" height="200" :src="'https://www.youtube.com/embed/' + videoId" class="play-video"></iframe>
                                <div class="response"></div>
                            </div>
                            <div class="configuration-more-options">

                            </div>
                            <div class="configuration">

                            </div>
                        </div>
                    </div>
                    <div class="room-options">
                        <button class="end-meeting" v-on:click="endThisMeeting()">
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
                <div class="video-meeting-footer">
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
                                <i class="fas fa-paper-plane"></i>
                            </div>
                        </form>                
                    </div>
                </div>
            </div>
            <endMeeting v-if="endMeeting == 1" id="end-meeting-message" />
        </div>
        <div class="meeting-expanded-overlay" v-on:click="contractVideoMeeting()"></div>
    </div>
</template>

<script>
import $ from 'jquery';
import headerOptions from "../components/headerOptions.vue"
import endMeeting from  "../components/end-meeting.vue"
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: 'videoMeeting',
    mixins: [globalMethods],
    data() {
        return {
            videoId: '',
            teste: '',
            addMediaOpened: 1,
            endMeeting: 0,
            video: this.$route.params.video,
            mics: [
                {
                    name: "Microfone 1",
                    id: 1
                },
                {
                    name: "Microfone 2",
                    id: 2
                },
                {
                    name: "Microfone 3",
                    id: 3
                },
                {
                    name: "Microfone 4",
                    id: 4
                },
            ],
            cams: [
                {
                    name: "Camera 1",
                    id: 1
                },
                {
                    name: "Camera 2",
                    id: 2
                },
                {
                    name: "Camera 3",
                    id: 3
                },
                {
                    name: "Camera 4",
                    id: 4
                },
            ]
        }
    },
    components: {
        headerOptions,
        endMeeting
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
            this.toggleClasses("#mic", "fa-microphone", "fa-microphone-slash");
            
        },
        onOffCamera() {
            this.toggleClasses("#cam", "fa-video", "fa-video-slash");
        },
        microphoneMoreOptions() {
            var optionsMic = $(".more-options-mic");
            var optionsCam = $(".more-options-cam");

            //Reset das opções
            optionsCam.removeClass("d-flex");
            optionsCam.addClass("d-none");

            if (optionsMic.hasClass("d-flex")) {
                optionsMic.removeClass("d-flex");
                optionsMic.addClass("d-none");
            } else {
                optionsMic.addClass("d-flex");
            }  
        },
        cameraMoreOptions() {
            var optionsMic = $(".more-options-mic");
            var optionsCam = $(".more-options-cam");

            //Reset das opções
            optionsMic.removeClass("d-flex");
            optionsMic.addClass("d-none");

            if (optionsCam.hasClass("d-flex")) {
                optionsCam.removeClass("d-flex");
                optionsCam.addClass("d-none");
            } else {
                optionsCam.addClass("d-flex");
            }  
        },
        selectMicrophone(id) {
            $(".select-microphone").hide();
            $("#mic" + id + " .select-microphone").show();

            //Lógica para ativar o microfone selecionado
        },
        selectCamera(id) {
            $(".select-camera").hide();
            $("#cam" + id + " .select-camera").show();

            //Lógica para ativar a camera selecionado
        },
        closeConfigurations() {
            $(".configuration-other-controls").css("display", "none");
        },
        openConfigurations() {
            $(".configuration-other-controls").css("display", "flex");
        },
        addMedia() {
            this.openConfigurations();
            this.addMediaOpened = 1;
        },
        searchLinkToAddMedia() {
            var input = $("#url-video").val();
            var video = $(".play-video");
            if (input != '' && input.length > 32) {
                $(".response").html("");
                this.videoId = '';
                for (let i = 32; i <= 42; i++) {
                    this.videoId += input[i];
                }
                $("#url-video").val("");
                $(".add-video-button").hide();
                $(".play-video").show();
                $(".remove-video-button").show();
            } else {
                if (!video.is(":visible")) {
                    $("#url-video").val("");
                    $(".response").html("Há algo de errado, tente novamente!");
                }
            }
        },
        removeVideoIframe() {
            $(".play-video").hide();
            $(".remove-video-button").hide();
            this.videoId = '';
        },
        showAddVideoButton() {
            if (!$("#url-video").val() == '') {
                $(".add-video-button").show();
            } else {
                $(".add-video-button").hide();
            }
        },
        muteUnmuteAudio() {
            this.toggleClasses(".mute i", "fa-volume-up", "fa-volume-off");
        },
        toggleClasses(element, classRemove, classAdd) {
            if ($(element).hasClass(classRemove)) {
                $(element).removeClass(classRemove);
                $(element).addClass(classAdd);
            } else if ($(element).hasClass(classAdd)) {
                $(element).removeClass(classAdd);
                $(element).addClass(classRemove);
            }
        },
        endThisMeeting() {
            $(".video-meeting-container-inner").css("opacity", 0);
            $(".meeting-expanded-overlay").css("display", "none");
            setTimeout(() => {
               this.endMeeting = 1; 
            }, 400);
            this.totalSeconds = 18000;
            setTimeout(() => {
                $(".time-duration-container").hide();
            });
            setTimeout(() => {
                window.location.replace("/feed");
            }, 3000);
        },
        expandVideoMeeting() {
            $(".video-meeting-body").addClass("video-meeting-body-expanded");
            $(".meeting").addClass("meeting-expanded");
            $(".room-options").addClass("room-options-expanded");
            if(!$(".video").hasClass("video-expanded")) {
                $(".meeting-controls").css("left", "-20rem");
            }
            $(".video").addClass("video-expanded");
            $(".meeting-expanded-overlay").css("display", "block");
            $(".room-options button").css("box-shadow", "0 0 10px rgba(0,0,0,0.7)");
            $(".configuration-other-controls").css("height", "90%");
        },
        contractVideoMeeting() {
            $(".video-meeting-body").removeClass("video-meeting-body-expanded");
            $(".meeting").removeClass("meeting-expanded");
            $(".room-options").removeClass("room-options-expanded");
            $(".video").removeClass("video-expanded");
            $(".meeting-expanded-overlay").css("display", "none");
            $(".room-options button").css("box-shadow", "none");
        },
        showMeetingControls() {
            $(".meeting-controls").css("left", "0");
            clearTimeout(this.teste);
        },
        hideMeetingControls() {
            this.teste = setTimeout(() => {
                $(".meeting-controls").css("left", "-20rem");
            }, 5000);
        }
    }
}
</script>

<style scoped>
    .container-controls-hover {
        height: 100%;
        width: 70px;
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
    }

    .end-meeting-message {
        transition: 0.4s opacity;
    }
    .lateral-videos {
        max-height: 100%;
        height: 48vh;
        overflow-x: hidden;
        overflow-y: scroll;
        width: 9rem;
        position: absolute;
        right: 0;
        padding: .5rem 0;
    }

    .meeting-expanded {
        max-height: 100%!important;
        border-radius: 10px;
    }

    .room-options-expanded {
        margin-top: -4.5rem;
    }

    .video-expanded {
        height: 100%;
        margin: 0!important;
    }

    .meeting-expanded-overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 999;
        background: black;
        opacity: 0.7;
        top: 0;
        left: 0;
        display: none;
    }

    .video-meeting-body-expanded {
        position: fixed!important;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 90vw!important;
        height: 90vh;
        max-height: 1080px;
        max-width: 1920px;
        z-index: 1000;
    }

    .video-meeting-principal {
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

    .video-meeting-container-inner {
        transition: 0.4s;
        height: 100%;
    }

    .video-meeting-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-self: flex-start;
    }

    .video-meeting-header-inner {
        display: flex;
        align-items: center;
    }

    .time-duration-container {
        font-size: .9rem;
        display: none;
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
        position: relative;
    }

    .video {
        width: 100%;
        margin: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
    }

    img.meeting {
        width: 100%;
        max-height: 50vh;
        object-fit: cover;
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
        z-index: 2;
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

    .end-meeting:hover {
        background: var(--red-high);
    }

    .end-meeting:active {
        background: var(--red-low);
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
        margin-left: .5rem;
        position: absolute;
        left: 0;
        padding: 1rem .3rem;
        border-radius: 10px;
        z-index: 1;
        user-select: none;
        transition: all 0.4s;
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
        width: 8rem;
        height: 6rem;
        border-radius: 10px;
        overflow: hidden;
        margin: .4rem 0;
    }

    .more-options-container {
        background: rgba(0,0,0,0.7);
        border-radius: 10px;
        color: var(--white);
        display: none;
        flex-direction: column;
        width: 12rem;
        max-height: 90px;
        overflow: hidden;
        position: absolute;
        margin-right: -16rem;
        margin-top: -.7rem;
    }

    .more-options-cam {
        margin-top: 2rem;
    }

    .more-options-inner {
        margin: .5rem;
        overflow-y: scroll;
    }

    .mic-list, .cam-list {
        display: flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
        padding-left: .3rem;
    }

    .mic-list:hover, .cam-list:hover {
        background: rgba(255,255,255,0.2);
    }


    .mic-list i, .cam-list i {
        font-size: .9rem;
    }

    .mic-list p, .cam-list p {
        margin: 0;
        margin-left: .7rem;
        white-space: nowrap;
        text-overflow: clip;
        overflow: hidden;
    }

    .select-microphone, .select-camera {
        display: none;
    }

    /* CONFIGURATIONS */

    .configuration-other-controls {
        width: 90%;
        height: 70%;
        background: rgba(0,0,0,0.9);
        border-radius: 10px;
        position: absolute;
        z-index: 3;
        padding: .8rem;
        display: none;
        flex-direction: column;
        align-items: center;
        top: 0;
        bottom: 2.5rem;
        right: 0;
        left: 0;
        margin: auto;
    }

    .configuration-other-container {
        width: 100%;
        height: 100%;
    }

    .configuration-other-controls i {
        color: var(--white);
    }

    .play-video {
        width: 100%;
        height: 100%;
        display: none;
    }

    .configuration-add-media {
        width: 100%;
        height: 100%;
    }

    .configuration-add-media iframe {
        border: none;
        border-radius: 15px;
    }

    .configuration-others-header {
        width: 100%;
        margin-top: -.2rem;
        margin-bottom: .4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .add-media {
        margin-top: .5rem;
    }

    .url-video {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        margin-top: -2rem;
        margin-bottom: .2rem;
    }

    .close-configurations {
        padding: 0 .3rem;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1;
    }
    .close-configurations:hover {
        background: rgba(255,255,255,0.2);
    }

    .url-video i {
        font-size: 1.2rem;
        margin-right: 1rem;
    }

    .url-video input {
        padding: .3rem;
        border: none;
        border-radius: 10px;
    }
    .url-video input::placeholder {
        margin-left: 1rem;
    }

    .add-video-button, .remove-video-button {
        background: var(--blue);
        border: none;
        border-radius: 10px;
        color: var(--white);
        padding: .4rem;
        font-size: .9rem;
        margin-left: .8rem;
        display: none;
    }
    .add-video-button:hover {
        background: var(--blue-high);
    }
    .add-video-button:active {
        background: var(--blue-low);
    }

    .response {
        color: var(--white);
        width: 100%;
        text-align: center;
        margin-top: 2rem;
    }

    #send-message {
        margin-right: -3.5rem;
    }

    .input-icons {
        margin-left: -2rem;
    }

        .input-icons i {
            margin: 0 .5rem;
            cursor: pointer;
        }

    .chat-box-body {
        height: 340px;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        padding-left: .5rem 0 .5rem 1rem;
    }

    .time-duration {
        text-align: end;
        font-size: .9rem;
        justify-self: flex-end;
    }
</style>
