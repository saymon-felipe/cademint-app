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
                    <ul class="profile-body-nav">
                        <li class="active" v-on:click="chooseMenu(0)"><span>Linha do tempo</span></li>
                        <li class="hover" v-on:click="chooseMenu(1)"><span>Sobre</span></li>
                        <li class="hover" v-on:click="chooseMenu(2)"><span>Amigos</span></li>
                        <li class="hover" v-on:click="chooseMenu(3)"><span>Fotos</span></li>
                    </ul>
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
import $ from 'jquery'

export default {
    name: "profile",
    components: {
        headerOptions
    },
    methods: {
        openEditBanner() {
            console.log("editar banner");
        },
        hideImgExpanded() {
            console.log("esconder img expandida");
            $(".img-expanded").css("transform", "translateY(-100vh)");
            $(".overlay-img-expanded").hide();
        },
        showExpandedImg() {
            $(".img-expanded").css("transform", "translateY(0)");
            $(".overlay-img-expanded").show();
        },
        chooseMenu(n) {
            var li = $(".profile-body-nav li");

            //Resetar todo o menu
            for (let i = 0; i < 4; i++) {
                $(li[i]).removeClass();
                $(li[i]).addClass("hover");
            }
            $(li[n]).addClass("active");
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
        width: 70%;
        transition: 0.5s transform;
        padding: .5rem 1rem 1rem;
        background: var(--white);
        margin: auto;
        margin-top: -50vh;
        text-align: right;
        flex-direction: column;
        position: relative;
        border-radius: 10px;
        z-index: 1001;
        transform: translateY(-100vh);
        
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
        border: 1px solid red;
        width: 90%;
        border-radius: 10px;
        margin: 1.3rem auto;
        background: var(--gray-high);
        display: flex;
        justify-content: center;
    }

    .profile-body-menu {
        margin-top: -2.3rem;
    }

    .profile-body-nav {
        list-style: none;
        display: flex;
    }

    .profile-body-nav li {
        margin: 0 .3rem;
        padding: .5rem 1rem;
        background: var(--gray-high);
        border-radius: 10px 10px 0 0;
        cursor: pointer;
        user-select: none;
    }

    .hover:hover {
        background: var(--gray-medium);
    }

    .active {
        background: var(--gray)!important;
        color: var(--white);
        cursor: text!important;
    }
</style>