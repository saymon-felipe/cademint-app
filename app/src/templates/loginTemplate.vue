<template>
    <div class="login-container">
        <slot />
    </div>
</template>

<script>
export default {
    name: "templateLogin"
}
</script>

<style scoped>
    .login-container {
        width: 100%;
        height: 100vh;
        background: url("../assets/img/logo-cademint-v2-reduced.png"), var(--yellow);
        background-repeat: no-repeat;
        background-position: center 5%;
        background-size: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 920px) {
        .login-container {
            background-size: 300px;
        }
    }
    @media (max-width: 650px) {
        .login-container {
            background-size: 250px;
        }
    }
    @media (max-width: 460px) {
        .login-container {
            background-size: 200px;
        }
    }
</style>