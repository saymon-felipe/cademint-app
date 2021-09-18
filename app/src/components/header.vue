<template>
    <header>
        <div class="header-mobile">
            <div class="menu-mobile-icons">
                <div id="menu-hamburguer" v-on:click="openMenu()">
                    <i class="fas fa-bars"></i>
                </div>
                <i class="far fa-comment-dots menu-chat-icon" v-on:click="toggleChat()"></i>
            </div>
            <a href="/feed">
                <img class="logo" src="../assets/img/logo-cademint-v2-reduced.png" alt="Logo Cademint" title="Cademint">
            </a>
        </div>
        <div id="lateral-menu">
            <a href="/feed">
                <img class="logo" src="../assets/img/logo-cademint-v2-reduced.png" alt="Logo Cademint" title="Cademint">
            </a>
            <div class="home-user">
                <div>
                    <img :src="requireImage(this.mainUserId)" class="img-user">
                </div>
                <div class="home-user-text">
                    <h4><strong>Olá, </strong><span class="user-name">{{ findUser(this.mainUserId).name }}</span></h4>
                    <h6 class="today"></h6>
                    <div id="label-ranking" :class="'label-ranking-interaction ' + findRankingPosition(this.findUser(this.mainUserId).ranking_position, 1)">
                        <h6>{{ formatRankingPosition(this.findUser(this.mainUserId).ranking_position) }}</h6>
                    </div>
                </div>
                <a href="/" class="account-configuration">
                    <i class="fas fa-cog"></i>
                </a>
            </div>
            <div class="status-box">
                <div class="status-content">
                    <textarea name="" id="" cols="30" rows="6" maxlength="55" placeholder="Insira seu status..."></textarea>
                </div>
            </div>
            <div id="lateral-navbar" class="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <i class="fas fa-home menu-icon"></i>
                        <router-link to="/feed" class="nav-link" v-on:mouseenter.native="animationHover(0)" v-on:mouseout.native="resetAnimation()">Página inicial <i class="fas fa-chevron-left arrow-menu"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <i class="fas fa-user-alt menu-icon"></i>
                        <router-link :to="'/profile/' + this.mainUserId" class="nav-link" v-on:mouseenter.native="animationHover(1)" v-on:mouseout.native="resetAnimation()">Meu perfil <i class="fas fa-chevron-left arrow-menu"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <i class="fas fa-users menu-icon"></i>
                        <router-link to="/my-rooms" class="nav-link" v-on:mouseenter.native="animationHover(2)" v-on:mouseout.native="resetAnimation()">Minhas salas <i class="fas fa-chevron-left arrow-menu"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <i class="fas fa-sign-in-alt menu-icon"></i>
                        <router-link to="/login" class="nav-link" v-on:mouseenter.native="animationHover(3)" v-on:mouseout.native="resetAnimation()">Login (Temporário) <i class="fas fa-chevron-left arrow-menu"></i></router-link>
                    </li>
                </ul>
            </div>
            <div class="search">
                <input type="text" name="search" id="search" placeholder="Pesquisar em Cademint">
                <i class="fas fa-search"></i>
            </div>
            <div class="menu-footer">
                <div class="container">
                    <h6>&copy; Cademint - 2021</h6>
                </div>
            </div>
        </div>
        <div class="overlayMenu" v-on:click="closeMenu()"></div>
        <div class="overlayChat" v-on:click="closeChat()"></div>
    </header>
</template>

<script>
import $ from 'jquery'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: 'Header',
    mixins: [globalMethods],
    created() {
        setTimeout(() => {
            var labelRanking = $("#label-ranking").attr("class");
            $("#label-ranking").css("color", this.testIfColorBlack(labelRanking))
        }, 50);
    },
    methods: {
        openMenu() {
            $("#lateral-menu").css("transform", "translateX(0)");
            $(".overlayMenu").show();
        },
        closeMenu() {
            $("#lateral-menu").css("transform", "translateX(-100vw)");
            $(".overlayMenu").hide();
        },
        animationHover(index) {
            let arrows;
            arrows = document.querySelectorAll(".arrow-menu");
            arrows[index].style.transform = "translateX(-7px)";
        }, 
        resetAnimation() {
            let arrows;
            arrows = document.querySelectorAll(".arrow-menu");
            for (let i in arrows) {
                arrows[i].style.transform = "translateX(0px)";
            }
        },
        toggleChat() {
            if (this.hasOpened == 1) {
                $('.chat').css("transform", "translateX(100vw)");
                this.hasOpened = 0;
                $(".overlayChat").hide();
            } else {
                $('.chat').css("transform", "translateX(0)");
                this.hasOpened = 1;
                $(".overlayChat").show();
            }
        },
        closeChat() {
            $('.chat').css("transform", "translateX(100vw)");
            this.hasOpened = 0;
            $(".overlayChat").hide();
        }
    }
}
</script>
<style scoped>

    .header-mobile {
        font-size: 1.5rem;
        color: var(--gray-low);
        display: flex;
        justify-content: space-between;
        background: var(--yellow);
        padding: 7px 30px;
        position: fixed;
        width: 100%;
        z-index: 997;
    }

    .menu-mobile-icons {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .menu-chat-icon {
        margin-right: 1.3rem;
        display: none;
        align-items: center;
        cursor: pointer;
    }
    .overlayChat {
        width: 100vw;
        height: 100vh;
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
    }
    @media (max-width: 850px) {
        .menu-chat-icon{
            display: flex;
            align-items: center;
        }
    }
    @media (max-width: 420px) {
        .menu-chat-icon{
            font-size: 1.3rem;
        }
        .menu-mobile-icons {
            font-size: 1.3rem;
        }
    }
    @media (max-width: 270px) {
        .menu-chat-icon{
            display: flex;
            align-items: center;
            margin-right: .5rem;
        }
    }

    #lateral-menu {
        width: 300px;
        max-width: 500px;
        height: 100vh;
        background: var(--yellow);
        text-align: center;
        padding: 30px 5px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        transition: 0.4s transform;
        transform: translateX(-500px);
    }

    @media (max-width: 720px) {
        #lateral-menu {
            overflow-y: scroll;
        }
    }

    #menu-hamburguer {
        cursor: pointer
    }
    .overlayMenu {
        background: #000;
        width: 100%;
        display: none;
        opacity: 0.7;
        min-width: 160px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 998;
    }
    .home-user {
        margin-top: 2rem;
        padding: .2rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .home-user-text {
        margin: 0 .3rem;
    }
    
    .home-user-text h6 {
        font-size: .8rem;
    }

    .home-user-text h4 {
        font-size: 1.1rem;
    }

    .account-configuration {
        font-size: 1.5rem;
        color: var(--gray-low);
    }

    /* STATUS */
    .status-content {
        position: relative;
    }

    .status-content textarea {
        background: var(--yellow-high);
        border-radius: 10px;
        border: none;
        resize: none;
        margin-top: 3rem;
        padding: .8rem;
        width: 80%;
        height: 9rem;
        min-height: 150px;
    }

    .status-content textarea::placeholder {
        text-align: center;
        font-style: italic;
        background: url("../assets/img/message-icon.png") no-repeat center center;
        background-size: 4rem;
        background-position-y: 35px;
        height: 7rem;
    }

    .status-content::after {
        content: '';
        width: 65%;
        height: 2px;
        background: var(--yellow);
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        margin: auto;
    }
    @media (max-width: 720px) {
        .status-content textarea {
            margin-top: 1.5rem;
            width: 90%;
            height: 6rem;
            min-height: 80px;
        }

        .status-content textarea::placeholder {
            font-size: .8rem;
            background-size: 2.4rem;
            background-position-y: 30px;
            height: 4rem;
        }

        .status-content::after {
            display: none;
        }
    }


    /* NAVBAR */

    #lateral-navbar {
        margin-top: 2rem;
        text-align: left;
        display: flex;
        justify-content: center;
    }
        #lateral-navbar ul {
            font-weight: 600;
        }

            #lateral-navbar ul li a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 1.3rem;
                width: 100%;
            }

                #lateral-navbar ul li a i {
                    font-size: 1.3rem;
                    margin-left: 1.3rem;
                    transition: 0.3s transform;
                }

    .menu-icon {
        font-size: 1.3rem;
        width: 35px;
        text-align: center;
    }

    .nav-item {
        margin: .4rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 720px) {
        #lateral-navbar {
            margin: 0;
            padding: .8rem;
            margin-top: 1.3rem;
        }
        #lateral-navbar ul li a {
            font-size: .8rem;
        }
        .menu-icon {
            font-size: 1rem;
        }#lateral-navbar ul li a i {
            display: none;
        }
        .nav-item {
            margin: 0;
        }
    }

    /* SEARCH */
    .search {
        margin-top: 2rem;
        display: flex;
        align-items: center;
    }
    .search input {
        width: 80%;
        border-radius: 10px;
        border: none;
        padding: 5px 12px;
        background: var(--yellow-high);
        position: relative; 
        left: 30px;
    }

    .search input::placeholder {
        font-size: .9em;
    }
    .search i {
        position: relative;
        height: 100%;
        width: 30px;
        right: 10px;
        cursor: pointer;
    }

    @media (max-width: 720px) {
        .search input {
            width: 90%;
            left: 13px;
        }
        .search i {
            width: 20px;
            right: 17px;
        }
        .search input::placeholder {
            font-size: .7em;
        }
    }

    /* MENU FOOTER */

    .menu-footer {
        margin-top: 3.5rem;
    }
        .menu-footer h6 {
            font-size: .8rem;
        }

    @media (max-width: 720px) {
        .account-configuration {
            font-size: 1rem;
        }
        .home-user-text h6 {
            font-size: .6rem;
        }
        .home-user-text h4 {
            font-size: .8rem;
        }
        #lateral-menu{
            width: 40vw;
            min-width: 200px;
        } 
        .menu-footer {
            margin-top: 2rem;
        }
        .menu-footer h6 {
            font-size: .7rem;
        }
    }
    @media (min-width: 1159px) {
        #lateral-menu {
            transform: translateX(0);
        }
        .header-mobile {
            display: none;
        }
    }    
</style>
