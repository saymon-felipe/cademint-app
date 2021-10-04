<template>
    <div class="privacity-container" :key="updateComponent" v-on:load="resetInputs()">
        <form class="privacity-form">
            <div class="hide-tel">
                <label for="hide-tel">Tornar meu telefone privado</label>
                <input type="checkbox" name="hideTel" id="hide-tel" v-on:change="showConfirmButtons()">
            </div>
            <div class="only-friends">
                <label for="only-friends">Somente amigos podem ver minhas informações de perfil</label>
                <input type="checkbox" name="onlyFriends" id="only-friends" v-on:change="showConfirmButtons()">
            </div>
            <div class="confirm-buttons" v-if="changePrivacitySetting == 1">
                <input type="button" value="Salvar" id="update-informations" v-on:click="saveChanges()">
                <input type="button" value="Cancelar" id="cancel-update" v-on:click="resetInputs()">
            </div>
        </form>
        <div class="response"></div>
    </div>
</template>

<script>
import $ from 'jquery'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: "privacityConfiguration",
    data() {
        return {
            changePrivacitySetting: 0,
            updateComponent: 0
        }
    },
    mixins: [globalMethods],
    methods: {
        showConfirmButtons() {
            this.changePrivacitySetting = 1
        },
        resetInputs() {
            this.changePrivacitySetting = 0;
            this.updateComponent += 1;
            var user = this.findUser(this.mainUserId);
            setTimeout(() => {
                this.checkInputCheckbox("#hide-tel", user.allow_private_tel);
                this.checkInputCheckbox("#only-friends", user.only_friends);
            }, 1);
        },
        saveChanges() {
            this.changePrivacitySetting = 0;
            $(".response").html("Suas informações foram salvas com sucesso!");
            setTimeout(() => {
                $(".response").html("");
            }, 5000);
        },
        checkInputCheckbox(element, boolean) {
            $(element).attr("checked", boolean);
        }
    },
    mounted() {
        var user = this.findUser(this.mainUserId);
        this.checkInputCheckbox("#hide-tel", user.allow_private_tel);
        this.checkInputCheckbox("#only-friends", user.only_friends);
    }
}
</script>   

<style scoped>
    .privacity-container {
        margin-top: 1rem;
    }

    .confirm-buttons {
        align-self: flex-end;
    }

    .privacity-form {
        display: flex;
        flex-direction: column;
    }

    .hide-tel, .only-friends {
        display: flex;
        flex-direction: row-reverse;
        margin: 1rem 0;
        align-items: center;
    }

    .hide-tel input, .only-friends input {
        width: 20%;
    }
    .hide-tel label, .only-friends label {
        width: 80%;
        font-weight: 600;
        margin: 0;
    }
</style>