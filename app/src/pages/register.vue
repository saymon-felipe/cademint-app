<template>
    <loginTemplate>
        <registerComponent />
    </loginTemplate>
</template>

<script>
import loginTemplate from "../templates/loginTemplate.vue"
import registerComponent from "../components/register.vue"

export default {
    name: "login",
    components: {
        loginTemplate,
        registerComponent
    }
}
</script>

<style scoped>

</style>