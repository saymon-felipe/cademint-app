<template>
    <div class="login">
        <h4 class="header-text">Cadastre-se:</h4>
        <form id="login-form" @submit.prevent="temporaryRegister()" method="POST">
            <input type="text" name="name" id="name" placeholder="Nome" required>
            <input type="text" name="user" id="user" placeholder="Usuário" required>
            <input type="password" name="password" id="password" placeholder="Senha" required>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme a senha" required>
            <button type="submit">Cadastrar</button>
            <div class="response"></div>
        </form>
        <div class="login-actions">
            <h6 class="register">Já é cadastrado? <router-link to="/login" id="login">Faça login</router-link></h6>
            <h6><a href="#">Esqueci minha senha</a></h6>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: "registerComponent",
    methods: {
        temporaryRegister() {
            if ($("#confirmPassword").val() != $("#password").val()) {
                $(".response").addClass("response-error");
                $(".response").html("As senhas não coincidem, tente novamente");
                $("#confirmPassword").val("");
                $("#password").val("");
            } else {
                window.location.replace("/feed");
            }
        }
    }
}
</script>

<style scoped>
    .login {
        display: flex;
        background: var(--white);
        border-radius: 20px;
        flex-direction: column;
        justify-content: center;
        width: 30rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        padding: 70px 25px;
        margin: 0 15px;
    }
    .header-text {
        align-self: center;
        font-size: 1.7rem;
    }
    .login-actions {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        width: 100%;
    }
        .login-actions h6 {
            font-size: .9rem;
        }

    .login-actions h6 a:hover {
        text-decoration: underline!important;
    }

    input, button {
        display: block;
        height: 40px;
        width: 100%;
        padding: 5px 30px;
    }
    input {
        border: 1px solid var(--gray-medium);
        background: var(--gray-high);
        border-radius: 10px;
        margin: 10px 0;
    }
    button {
        background: var(--blue);
        border: none;
        border-radius: 10px;
        color: var(--white);
        font-size: 1.2rem;
    }
    button:active {
        background: var(--blue-low);
    }

    form {
        margin: 20px 0;
        text-align: center;
    }

    #login {
        margin-top: 5px;
    }

    .register {
        margin-right: 8px!important;
    }

    span {
        cursor: pointer;
    }

    span:hover {
        opacity: 0.8;
        text-decoration: underline;
    }

    .response {
        margin-top: 1rem;
    }

    .response-error {
        color: var(--red);
    }

    @media(max-width: 420px) {
        .header-text {
            font-size: 1.3rem;
        }
    }
</style>