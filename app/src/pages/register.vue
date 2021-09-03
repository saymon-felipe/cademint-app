<template>
    <loginTemplate>
        <registerContainer />
    </loginTemplate>
</template>

<script>
import loginTemplate from "../templates/loginTemplate.vue"
import registerContainer from "../components/registerContainer.vue"

export default {
    name: "login",
    components: {
        loginTemplate,
        registerContainer
    }
}
</script>

<style scoped>

</style>