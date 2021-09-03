<template>
    <loginTemplate>
        <loginContainer />
    </loginTemplate>
</template>

<script>
import loginTemplate from "../templates/loginTemplate.vue"
import loginContainer from "../components/loginContainer.vue"

export default {
    name: "login",
    components: {
        loginTemplate,
        loginContainer
    }
}
</script>

<style scoped>

</style>