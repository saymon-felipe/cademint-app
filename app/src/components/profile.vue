<template>
    <div class="profile">
        <headerOptions />
        <div class="profile-container">
            <div class="profile-banner">
                <img src="../assets/img/test/ahri13.jpg" class="user-profile-banner"> <!--Dinâmico-->
                <div class="banner-edit">
                    <i class="fas fa-edit"></i>
                    <span v-on:click="openEditBanner()">Editar banner</span>
                </div>
            </div>
            <div class="user-profile-header">
                <div class="avatar-container">
                    <img src="../assets/img/test/img-user-test-1.jpg" class="avatar-g" v-on:click="showExpandedImg()">
                    <div class="avatar-edit">
                        <i class="fas fa-edit"></i>
                    </div>
                </div>
                <h4><strong class="user-name"></strong></h4>
            </div>
            <div class="profile-body">
                <div class="profile-body-menu">
                    <div class="profile-body-nav">
                        <li draggable="false" class="active profile-menu-item" v-on:click="chooseMenu(0)"><span>Linha do tempo</span></li>
                        <li draggable="false" class="hover profile-menu-item" v-on:click="chooseMenu(1)"><span>Sobre</span></li>
                        <li draggable="false" class="hover profile-menu-item" v-on:click="chooseMenu(2)"><span>Amigos</span></li>
                        <li draggable="false" class="hover profile-menu-item" v-on:click="chooseMenu(3)"><span>Fotos</span></li>
                    </div>
                </div>
                <div class="profile-body-content">
                    <profileTimeLine v-if="timeLine == 1" />
                    <profileAbout v-if="about == 1" userBirthday="14/09/2001" relationship="solteiro" schooling="Unicesumar" schoolingStatus="Estuda" telephone="(43) 9 9635-2536" from="Curitiba" liveIn="São João do Ivaí" />
                    <profileFriends v-if="friends == 1" userBirthday="22/12/2004" schoolingStatus="estuda" schooling="Unicesumar" telephone="41 9 8705-3290" from="Curitiba" liveIn="Curitiba"/>
                    <profilePhoto v-if="photos == 1" />
                </div>
            </div>
        </div>
        <div class="img-expanded">
            <i class="fas fa-times" v-on:click="hideImgExpanded()"></i>
            <img src="../assets/img/test/img-user-test-1.jpg">
        </div> 
        <div class="overlay-img-expanded" v-on:click="hideImgExpanded()"></div>
    </div>
</template>

<script>
import headerOptions from '../components/headerOptions.vue'
import profileTimeLine from '../components/profileTimeLine.vue'
import profileAbout from '../components/profileAbout.vue'
import profileFriends from '../components/profileFriends.vue'
import profilePhoto from '../components/profilePhoto.vue'
import $ from 'jquery'

export default {
    name: "profile",
    components: {
        headerOptions,
        profileTimeLine,
        profileAbout,
        profileFriends,
        profilePhoto
    },
    data() {
        return {
            timeLine: 1,
            about: 0,
            friends: 0,
            photos: 0
        }
    },
    methods: {
        openEditBanner() {
            console.log("editar banner");
        },
        hideImgExpanded() {
            console.log("esconder img expandida");
            $(".img-expanded").css("top", "-100vh");
            $(".overlay-img-expanded").hide();
        },
        showExpandedImg() {
            $(".img-expanded").css("top", "25vh");
            $(".overlay-img-expanded").show();
        },
        chooseMenu(n) {
            var li = $(".profile-menu-item");

            //Resetar todo o menu
            for (let i = 0; i < 4; i++) {
                $(li[i]).removeClass();
                $(li[i]).addClass("profile-menu-item hover");
                
            }
            
            //Adiciona class active
            $(li[n]).removeClass("hover");
            $(li[n]).addClass("active");

            //Reset das variáveis
            this.timeLine = 0;
            this.about = 0;
            this.friends = 0;
            this.photos = 0;

            //Atribuição às variáveis
            switch (n) {
                case 0:
                    this.timeLine = 1;
                    break;
                case 1:
                    this.about = 1;
                    break;
                case 2:
                    this.friends = 1;
                    break;
                case 3:
                    this.photos = 1;
                    break;
                
            }
        }
    }
}
</script>

<style scoped>
    .profile {
        width: 100%;
    }

    .profile-container {
        margin-top: 1.3rem;
        overflow: hidden;
        background: var(--white);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    .profile-banner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .user-profile-banner {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .banner-edit {
        position: relative;
        margin-right: 2rem;
        margin-top: -3.5rem;
        overflow: hidden;
        background: var(--white);
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: .3rem 1rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        cursor: pointer;
    }

        .banner-edit:hover {
            background: var(--gray-high);
        }

        .banner-edit:active {
            background: var(--gray-medium);
        }

    .banner-edit span {
        margin-left: .5rem;
        font-size: .9rem;
        user-select: none;
    }

    .user-profile-header {
        padding: 0 2rem;
        margin-bottom: 1.7rem;
        display: flex;
        align-items: center;
        margin-top: -.6rem;
    }

        .user-profile-header h4 {
            margin-left: 1.5rem!important;
        }

    .avatar-container {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        cursor: pointer;
    }

    .avatar-edit {
        margin-left: -2rem;
        background: var(--gray-medium);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        padding: .7rem;
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

    .img-expanded {
        width: 30vw;
        transition: 0.5s transform;
        padding: .5rem 1rem 1rem;
        background: var(--white);
        text-align: right;
        flex-direction: column;
        border-radius: 10px;
        z-index: 1001;
        position: absolute;
        transition: 0.5s top;
        top: -100vh;
        right: 0;
        left: 0;
        margin: auto;
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
        border-radius: 10px;
    }

    .overlay-img-expanded {
        width: 100vw;
        height: 100vh;
        background: #000;
        opacity: 0.7;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        display: none;
    }

    .profile-body {
        padding: 1rem;
        width: 90%;
        border-radius: 10px;
        margin: 2.5rem auto 1rem;
        background: var(--gray-high);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    .profile-body-menu {
        margin-top: -3.5rem;
    }

    .profile-body-nav {
        list-style: none;
        display: flex;
    }

    .profile-body-content {
        width: 100%;
        padding: .4rem;
        margin-top: 2rem;
        max-height: 30rem;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .profile-menu-item {
        margin: 0 .3rem;
        padding: .5rem 1rem;
        background: var(--gray-high);
        border-radius: 10px 10px 0 0;
        box-shadow: 0px -4px 7px 0px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        user-select: none;
    }

    .hover:hover {
        background: var(--gray-medium);
        opacity: 1!important;
    }

    .active {
        background: var(--gray)!important;
        color: var(--white)!important;
        cursor: text!important;
        opacity: 1!important;
    }
</style>