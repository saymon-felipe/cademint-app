<template>
    <div class="new-publication">
        <div class="new-publication-header">
            <img src="../assets/img/test/img-user-test-1.jpg" class="avatar-p">
            <div class="new-publication-text">
                <textarea placeholder="Faça uma publicação..." name="write-publication" id="write-publication" cols="40" rows="1" v-on:click="writePublication()" v-on:keyup="showPublishButton()"></textarea>
                <button style="display: none;" id="publish" class="publish-disabled" v-on:click="publish()" disabled>Publicar</button>
            </div>
        </div>
        <div class="hr"></div>

        <div class="media-icons">
            <div class="add-image">
                <i class="fas fa-images" v-on:click="addImageToPublication()"></i>
            </div>
            <div class="add-video" v-on:click="addVideoToPublication()">
                <i class="fas fa-film"></i>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: "newPublication",
    methods: {
        writePublication() {
            $(".new-publication-header").css("align-items", "flex-start");
            $("#write-publication").css("height", "255px");
            $("#write-publication").attr("rows", 10);
            $("#publish").show();
        },
        publish() {
            var button = $("#publish");
            $("#write-publication").val();
            $("#write-publication").val("");
            $("#write-publication").css("height", "38.78px");
            $("#write-publication").attr("rows", 1);
            button.removeClass();
            button.addClass("publish-disabled");
            button.attr("disabled", "disabled");
            $("#publish").hide();
        },
        addImageToPublication() {
            console.log("adicionar imagem à publicação");
        },
        addVideoToPublication() {
            console.log("adicionar video à publicação");
        },
        showPublishButton() {
            var textArea = $("#write-publication");
            var button = $("#publish");
            if(textArea.val() == "") {
                button.attr("disabled", "disabled");
                button.removeClass();
                button.addClass("publish-disabled");
            } else {
                button.removeAttr("disabled");
                button.removeClass();
                button.addClass("publish-enabled");
            }
        }
    }
}
</script>

<style scoped>
    .new-publication {
        width: 100%;
        background: var(--white);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        padding: .4rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.5rem;
    }

    .new-publication i {
        font-size: 1.5rem;
    }

    .new-publication-header {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .new-publication-header textarea {
        resize: none;
        border: 1px solid var(--gray-medium);
        background: var(--gray-high);
        border-radius: 10px;
        padding: .4rem;
        width: 100%;
    }

    .new-publication-text {
        display: flex;
        align-items: flex-end;
        margin-left: 1rem;
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
    }

    #publish {
        color: var(--white);
        padding: .2rem .7rem;
        border: none;
        border-radius: 10px;
        margin-left: -95px;
        margin-bottom: 10px;
    }

    .publish-enabled {
        background: var(--blue);
        cursor: pointer
    }

    .publish-disabled {
        background: var(--blue-high);
        cursor: not-allowed;
    }

    #publish:active {
        background: var(--blue-low);
    }

    #write-publication {
        cursor: text;
        transition: 0.3s height;
    }

    .media-icons {
        display: flex;
        align-items: center;
        width: 100%;
        height: 2rem;
    }

    .add-image, .add-video {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .add-image:hover, .add-video:hover {
        background: var(--gray-high);
    }

    .add-image i {
        color: var(--yellow)
    }
    
    .add-video i {
        color: var(--blue)
    }

    @media (max-width: 420px) {
        .add-image i, .add-video i {
            font-size: 1.3rem;
        }
        .new-publication-header textarea {
            padding: .2rem .5rem;
        }
        .new-publication {
            margin-top: 1rem;
        }
    }
</style>