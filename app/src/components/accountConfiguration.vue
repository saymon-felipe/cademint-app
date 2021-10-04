<template>
    <div class="account-configuration">
        <form class="form-configuration">
            <div class="configurations-header">
                <div class="edit-informations" v-on:click="editInformations()">
                    <i class="fas fa-pen"></i>
                </div>
                <div class="confirm-buttons" v-if="edit == 1">
                    <input type="button" value="Salvar" id="update-informations" v-on:click="updateInformations()">
                    <input type="button" value="Cancelar" id="cancel-update" v-on:click="cancelEdit()">
                </div>
            </div>
            <div class="configurations-inner">
                <div class="input-configuration user">
                    <label for="user">Usuário</label>
                    <input type="text" name="user" id="user" disabled>
                </div>
                <div class="input-configuration email">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" disabled>
                </div>
                <div class="input-configuration tel">
                    <label for="tel">Telefone</label>
                    <input type="tel" name="tel" id="tel" disabled>
                </div>
                <div class="input-configuration birthday">
                    <label for="birthday">Data de nascimento</label>
                    <input type="date" name="birthday" id="birthday" disabled>
                </div>
            </div>
        </form>
        <div class="response"></div>
    </div>
</template>

<script>
import $ from 'jquery'
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: 'accountConfiguration',
    mixins: [globalMethods],
    data() {
        return {
            edit: 0
        }
    },
    methods: {
        editInformations() {
            this.edit = 1;
            $(".edit-informations").hide();
            $(".confirm-buttons").show();
            this.enableInput("#user");
            this.enableInput("#tel");
        },
        updateInformations() {
            this.edit = 0;
            this.disableInput("#user");
            this.disableInput("#tel");
            $(".confirm-buttons").hide();
            $(".edit-informations").show();
            $(".response").html("Suas informações foram salvas com sucesso!");
            setTimeout(() => {
                $(".response").html("");
            }, 5000);
        },
        cancelEdit() {
            this.disableInput("#user");
            this.disableInput("#tel");
            $(".confirm-buttons").hide();
            $(".edit-informations").show();
        }
    },
    mounted() {
        $("#user").val(this.findUser(this.mainUserId).nickname);
        $("#email").val(this.findUser(this.mainUserId).email);
        $("#tel").val(this.findUser(this.mainUserId).tel);
        $("#birthday").val(this.findUser(this.mainUserId).birthday);
    }
}
</script>

<style scoped>
    .configurations-header {
        height: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .form-configuration {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .configurations-inner {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .input-configuration label, .input-configuration input {
        display: block;
    }

    .input-configuration {
        width: 45%;
        margin: .5rem 0;
    }

    .input-configuration label {
        font-weight: 600;
        margin-bottom: .2rem;
    }

    .edit-informations {
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

    .edit-informations:hover {
        background: var(--gray-medium-3)
    }

    
</style>