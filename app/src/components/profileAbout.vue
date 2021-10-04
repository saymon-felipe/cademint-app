<template>
    <div class="about-container">
        <div class="about-content">
            <div class="about-header">
                <h6><strong class="about-name">Sobre {{ findName($route.params.id) }}</strong></h6>
                <div class="edit-informations" v-on:click="editProfileInformations($route.params.id)">
                    <i class="fas fa-pen"></i>
                </div>
            </div>
            <div class="about-informations">
                <div class="birthday">
                    <div class="about-icon">
                        <i class="fas fa-birthday-cake"></i>
                    </div>
                    <span>{{ returnFormatedDate(findUser($route.params.id).birthday) }}</span>
                </div>
                <div class="relationship">
                    <div class="about-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <span>{{ returnRelationship($route.params.id) }}</span>
                </div>
                <div class="schooling">
                    <div class="about-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <span>{{ findUser($route.params.id).schooling }} em <strong>{{ findUser($route.params.id).institution }}</strong></span>
                </div>
                <div class="telephone">
                    <div class="about-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <span>{{ formatTel(findUser($route.params.id).tel) }}</span>
                </div>
                <div class="from">
                    <div class="about-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <span>De <strong>{{ findUser($route.params.id).from }}</strong></span>
                </div>
                <div class="live-in">
                    <div class="about-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <span>Mora em <strong>{{ findUser($route.params.id).live }}</strong></span>
                </div>
            </div>
        </div>
        <div class="movies">
            <div class="movies-header">
                <h6 class="about-movies"><strong>Filmes e séries</strong></h6>
                <div class="edit-movies">
                    <i class="fas fa-pen"></i>
                </div>
            </div>
            <div class="movie-list">
                <div class="movie">
                    <div class="movie-img">
                        <img src="../assets/img/test/plastic-memories.jpg">
                    </div>
                    <h6>Plastic Memories</h6> <!-- user.favoriteMovies.movieId.movieTitle -->
                </div>
                <div class="movie">
                    <div class="movie-img">
                        <img src="../assets/img/test/stranger-things.jpg">
                    </div>
                    <h6>Stranger Things</h6> <!-- user.favoriteMovies.movieId.movieTitle -->
                </div>
                <div class="movie">
                    <div class="movie-img">
                        <img src="../assets/img/test/power-stones.jpg">
                    </div>
                    <h6>Power Stones</h6> <!-- user.favoriteMovies.movieId.movieTitle -->
                </div>
                <div class="movie">
                    <div class="movie-img">
                        <img src="../assets/img/test/transformers.jpg">
                    </div>
                    <h6>Transformers</h6> <!-- user.favoriteMovies.movieId.movieTitle -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {globalMethods} from '../js/globalMethods.js'
import $ from 'jquery'

export default {
    name: "profileAbout",
    mixins: [globalMethods],
    methods: {
        editProfileInformations(id) {
            console.log(id)
            var userName = $(".about-name");
            var input = $("<input />");
            input.attr({
                value: this.findName(id),
                name: "name-input"
            })
            userName
        }
    }
}
</script>

<style scoped>
    .about-header, .movies-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .movies-header {
        margin-top: 1.5rem;
    }

    .movie {
        margin: .8rem .5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 7rem;
    }

        .movie h6 {
            margin-top: .3rem!important;
            font-size: .9rem;
        }


    .movie-list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .edit-informations, .edit-movies {
        cursor: pointer;
        background: transparent;
        border-radius: 50%;
        padding: .5rem;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s background;
    }

    .edit-informations:active, .edit-movies:active {
        background: var(--gray-medium);
    }

    .edit-informations:hover, .edit-movies:hover {
        opacity: 0.8;
    }

    .birthday, .relationship, .schooling, .telephone, .from, .live-in {
        margin: .3rem 0;
        display: flex;
        align-items: center;
    }

    .about-informations span {
        font-size: 1rem;
    }

    .about-icon {
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .6rem;
    }

    .movie-img {
        width: 7rem;
        height: 10rem;
        overflow: hidden;
    }

    .movie-img img {
        width: 100%;
    }


</style>