<template>
    <div class="friends-container">
        <div class="friends-search">
            <div class="input-div">
                <input type="text" name="friendsSearch" id="friends-search" placeholder="Procurar amigos">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="friends-inner">
            <div class="friend" id="user-001" v-on:click="expandFriendContainer(0)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img src="../assets/img/test/girl1.png" class="avatar-p" draggable="false">
                        <div class="onlineOffline"></div>
                    </div>
                    <div>
                        <h5 class="user-name-others"></h5>
                        <h6 class="user-status"></h6>
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
                                        <span>{{ userBirthday }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ schoolingStatus }} em <strong>{{ schooling }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ telephone }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ liveIn }}</strong></span>
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
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="friend" id="user-001" v-on:click="expandFriendContainer(1)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img src="../assets/img/test/girl1.png" class="avatar-p" draggable="false">
                        <div class="onlineOffline"></div>
                    </div>
                    <div>
                        <h5 class="user-name-others"></h5>
                        <h6 class="user-status"></h6>
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
                                        <span>{{ userBirthday }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ schoolingStatus }} em <strong>{{ schooling }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ telephone }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ liveIn }}</strong></span>
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
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="friend" id="user-001" v-on:click="expandFriendContainer(2)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img src="../assets/img/test/girl1.png" class="avatar-p" draggable="false">
                        <div class="onlineOffline"></div>
                    </div>
                    <div>
                        <h5 class="user-name-others"></h5>
                        <h6 class="user-status"></h6>
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
                                        <span>{{ userBirthday }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ schoolingStatus }} em <strong>{{ schooling }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ telephone }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ liveIn }}</strong></span>
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
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="friend" id="user-001" v-on:click="expandFriendContainer(3)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img src="../assets/img/test/girl1.png" class="avatar-p" draggable="false">
                        <div class="onlineOffline"></div>
                    </div>
                    <div>
                        <h5 class="user-name-others"></h5>
                        <h6 class="user-status"></h6>
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
                                        <span>{{ userBirthday }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ schoolingStatus }} em <strong>{{ schooling }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ telephone }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ liveIn }}</strong></span>
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
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="friend" id="user-001" v-on:click="expandFriendContainer(4)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img src="../assets/img/test/girl1.png" class="avatar-p" draggable="false">
                        <div class="onlineOffline"></div>
                    </div>
                    <div>
                        <h5 class="user-name-others"></h5>
                        <h6 class="user-status"></h6>
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
                                        <span>{{ userBirthday }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ schoolingStatus }} em <strong>{{ schooling }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ telephone }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ liveIn }}</strong></span>
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
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="friend" id="user-001" v-on:click="expandFriendContainer(5)">
                <div class="friend-header">
                    <div class="container-photo">
                        <img src="../assets/img/test/girl1.png" class="avatar-p" draggable="false">
                        <div class="onlineOffline"></div>
                    </div>
                    <div>
                        <h5 class="user-name-others"></h5>
                        <h6 class="user-status"></h6>
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
                                        <span>{{ userBirthday }}</span>
                                    </div>
                                    <div class="schooling">
                                        <div class="about-icon">
                                            <i class="fas fa-graduation-cap"></i>
                                        </div>
                                        <span>{{ schoolingStatus }} em <strong>{{ schooling }}</strong></span>
                                    </div>
                                    <div class="telephone">
                                        <div class="about-icon">
                                            <i class="fas fa-phone"></i>
                                        </div>
                                        <span>{{ telephone }}</span>
                                    </div>
                                    <div class="from">
                                        <div class="about-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>De <strong>{{ from }}</strong></span>
                                    </div>
                                    <div class="live-in">
                                        <div class="about-icon">
                                            <i class="fas fa-home"></i>
                                        </div>
                                        <span>Mora em <strong>{{ liveIn }}</strong></span>
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
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div> 
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
                                        </div>
                                        <div class="mutual-friend">
                                            <img src="../assets/img/test/girl3.png" class="avatar-p" draggable="false">
                                            <h6><strong>Cristina Gonçalves</strong></h6>
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

export default {
    name: "profileFriends",
    methods: {
        expandFriendContainer(n) {
            var containerExpanded = $(".containerFriends");
            var status = $(".friends-inner .user-status");
            containerExpanded.each((index, element) => {
                element.style = "display: none";
                status[index].style = "display: none";
            });
            containerExpanded[n].style = "display: block";
            status[n].style = "display: block";
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
        }
    },
    props: ["userBirthday", "schoolingStatus", "schooling", "telephone", "from", "liveIn"]
}
</script>

<style scoped>

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
    }

    .mutual-friends-container {
        display: flex;
        align-items: flex-start;
        margin-left: -.3rem;
        width: 100%;
        margin-top: -11.5rem;
    }

    .mutual-friends-inner {
        z-index: -1;
        max-height: 250px;
        overflow: hidden;
    }

        .mutual-friends-inner h6 {
            text-align: center;
        }

    .mutual-friends-list {
        margin: .5rem .6rem 0;
        max-height: 120px;
        overflow-y: scroll;
    }

    .mutual-friend {
        display: flex;
        align-items: center;
        margin: .3rem 0;
    }

        .mutual-friend h6 {
            margin-left: .8rem!important;
        }

    .friends-search {
        margin-top: -.7rem;
    }
</style>