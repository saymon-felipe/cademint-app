<template>
    <div class="comment"><!--Irá se repetir conforme quantidade de comentários na publicação-->
        <div class="comment-header" id="user-002">
            <div class="comment-header-inner">
                <img src="../assets/img/test/girl3.png" v-on:click="goToUserProfile(2)" class="avatar-pp">
                <div class="user-comment-header">
                    <div class="user-comment-header-text">
                        <router-link :to="'/profile/' + 2" class="mr-3"><h6 class="user-name-comment"></h6></router-link>
                        <i class="fas fa-ellipsis-h icon-clicable" v-on:click="commentMoreOptions()"></i>
                    </div>
                    <div class="user-comment">
                        <p class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic voluptatibus assumenda? </p><!--Texto dinâmico-->
                    </div>
                    <div class="comment-interation">
                        <h6><span v-on:click="commentLike()" class="comment-like">Curtir</span> | <span v-on:click="commentReply()" class="comment-reply">Comentar</span></h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment-footer">
            <div class="reply-comment">
                <div class="comment-header" id="user-003">
                    <div class="comment-header-inner">
                        <img src="../assets/img/test/girl4.jpg" v-on:click="goToUserProfile(3)" class="avatar-pp">
                        <div class="user-comment-header">
                            <div class="user-comment-header-text">
                                <router-link :to="'/profile/' + 3" class="mr-3"><h6 class="user-name-comment"></h6></router-link>
                                <i class="fas fa-ellipsis-h icon-clicable" v-on:click="commentMoreOptions()"></i>
                            </div>
                            <div class="user-comment">
                                <p class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic voluptatibus assumenda? </p><!--Texto dinâmico-->
                            </div>
                            <div class="comment-interation">
                                <h6><span v-on:click="commentLike()" class="comment-like">Curtir</span> | <span v-on:click="commentReply()" class="comment-reply">Comentar</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reply-comment">
                <div class="comment-header" id="user-003">
                    <div class="comment-header-inner">
                        <img src="../assets/img/test/girl4.jpg" v-on:click="goToUserProfile(3)" class="avatar-pp">
                        <div class="user-comment-header">
                            <div class="user-comment-header-text">
                                <router-link :to="'/profile/' + 3" class="mr-3"><h6 class="user-name-comment"></h6></router-link>
                                <i class="fas fa-ellipsis-h icon-clicable" v-on:click="commentMoreOptions()"></i>
                            </div>
                            <div class="user-comment">
                                <p class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic voluptatibus assumenda? </p><!--Texto dinâmico-->
                            </div>
                            <div class="comment-interation">
                                <h6><span v-on:click="commentLike()" class="comment-like">Curtir</span> | <span v-on:click="commentReply()" class="comment-reply">Comentar</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "comment",
    methods: {
        commentLike() {
            console.log("like no comentario")
        },
        commentReply() {
            console.log("responder o comentario")
        },
        commentMoreOptions() {
            console.log("mais opções do comentário")
        },
        goToUserProfile(userId) {
            window.location = "/profile/" + userId
        }
    }
}
</script>

<style scoped>
    img {
        cursor: pointer;
    }
    .comments {
        height: 250px;
        overflow-y: scroll;
    }

    .comment {
        max-width: 400px;
        padding: .6rem .8rem;
        border-radius: 10px;
    }

    .comment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
    }

    .comment-header-inner {
        display: flex;
        justify-content: space-between;
    }

    .user-name-comment {
        font-size: .9rem;
        font-weight: 600;
        margin-right: .3rem;
    }

    .user-comment-header {
        margin-left: .5rem;
        padding: .7rem;
        background: var(--gray-high-2);
        border-radius: 10px;
    }

    .user-comment-header-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user-comment {
        margin: .3rem 0;
    }

    .comment-like, .comment-reply {
        cursor: pointer;
        font-size: .8em;
        font-weight: 600;
    }

    .comment-like:hover, .comment-reply:hover {
        text-decoration: underline;
    }

    .reply-comment {
        max-width: 320px;
        margin-left: 1rem;
    }

    @media (max-width: 420px){
        .comment-header h6 {
            font-size: .9rem;
        }
        h6.user-name-comment {
            font-size: .8rem;
        }
        .comment-text {
            font-size: .8rem;
        }.user-comment-header-text i {
            font-size: .9rem;
        }
    }
</style>