<template>
    <div class="publication" id="user-001"><!--Irá se repetir conforme quantidade de publicações que chegarem no feed-->
        <div class="publication-header">
            <div class="user-content">
                <img src="../assets/img/test/girl1.png" class="avatar-p" v-on:click="goToUserProfile(1)">
                <h6 class="publication-informations"><span class="publication-author-name user-name-others" v-on:click="goToUserProfile(1)"></span><!--user.name--><span class="publication-action"> alterou a foto de perfil<!--publication.action--></span></h6>
            </div>
            <div>
                <i class="fas fa-ellipsis-h icon-clicable" v-on:click="publicationMoreOptions()"></i>
            </div>
        </div>
        <div class="publication-body">
            <div class="publication-text" style="display:block">
                <p>Não te desejo mal, apenas a reciprocidade! ☢️💥 <!--publication.text--></p>
            </div>
            <div class="publication-media">
                <img src="../assets/img/test/girl1.png" class="media">
            </div>
        </div>
        <div class="publication-footer">
            <div class="interation-bar">
                <div class="analytics">
                    <div class="number-likes-container"  v-on:mouseenter="showUsersLiked()" v-on:mouseout="hideUsersLiked()">
                        <i class="fas fa-star number-likes-icon"></i>
                        <h6 class="number-likes">12</h6>
                    </div>
                    <div class="number-comments-container" v-on:click="goToComments()">
                        <i class="fas fa-comment-dots"></i>
                        <h6 class="number-comments">5</h6>
                    </div>
                </div>
                <div class="hr"></div>
                <div class="publication-actions">
                    <div class="publication-like" v-on:click="likePublication()">
                        <i class="fas fa-star icon-clicable"></i>
                        <h6>Curtir</h6>
                    </div>
                    <div class="publication-comment" v-on:click="commentOnPublication()">
                        <i class="fas fa-comment-dots icon-clicable"></i>
                        <h6>Comentar</h6>
                    </div>
                    <div class="publication-share" v-on:click="sharePublication()">
                        <i class="fas fa-share icon-clicable"></i>
                        <h6>Compartilhar</h6>
                    </div>
                </div>
            </div>
            <div class="hr"></div>
            <div class="comments">
                <comments />
            </div>
        </div>
    </div>
</template>

<script>
//import jquery from 'jquery'
import comments from "../components/comment.vue"

export default {
    name: "publication",
    methods: {
        publicationMoreOptions() {
            console.log("mais opções da publicação");
        },
        goToUserProfile(userId) {
            window.location = "/profile/" + userId
        },
        likePublication() {
            console.log("like na publicação")
        },
        commentOnPublication() {
            console.log("comentando na publicação")
        },
        sharePublication() {
            console.log("compartilhar a publicação")
        },
        showUsersLiked() {
            console.log("mostrando usuários que curtiram a publicação")
        },
        hideUsersLiked() {
            console.log("escondendo usuários que curtiram a publicação")
        },
        goToComments() {
            console.log("ir ate os comentarios")
        }
    },
    components: {
        comments
    }
}
</script>

<style scoped>
    .publication {
        width: 100%;
        overflow-x: hidden;
    }

    .publication-header {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    .publication-header i {
        font-size: 1.2rem;
        cursor: pointer;
    }

    .user-content {
        display: flex;
        align-items: center;
    }

    .user-content img {
        cursor: pointer;
    }

    .publication-informations {
        margin-left: 1rem!important;
    }

    .publication-author-name {
        cursor: pointer;
    }

    .publication-body {
        padding: .7rem 0;
    }

    .publication-author-name {
        font-weight: 600;
    }

    .media {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }

    .publication-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }

    .publication-like, .publication-comment, .publication-share {
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .publication-like i, .publication-comment i, .publication-share i {
        margin-right: .5rem;
    }

    .publication-like h6:hover, .publication-comment h6:hover, .publication-share h6:hover {
        text-decoration: underline;
    }

    .number-likes-icon {
        color: var(--yellow);
    }

    .analytics {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }

    .number-likes-container, .number-comments-container {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .number-likes-container i, .number-comments-container i {
        margin-right: .5rem;
    }  
    
    @media (max-width: 420px) {
        .publication-informations {
            margin: .6rem!important;
            width: 75%;
            font-size: .9rem;
        }
        .publication-text p {
            font-size: .8rem;
        }
        .publication-like i, .publication-like h6, .publication-comment i, .publication-comment h6, .publication-share i, .publication-share h6 {
            font-size: .8rem;
        }
    }

    @media (max-width: 350px) {
        .publication-like h6, .publication-comment h6, .publication-share h6 {
            display: none;
        }
        .publication-like i, .publication-comment i, .publication-share i {
            font-size: 1rem;
        }
        .analytics i, .analytics h6 {
            font-size: .8rem;
        }
    }
</style>