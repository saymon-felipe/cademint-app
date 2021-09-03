<template>
    <div>
        <Header />
        <div class="main-container">
            <div class="inner-container">
                <slot />
            </div>
        </div>
        <Chat />
    </div>
</template>

<script>
import Header from "../components/header.vue"
import Chat from "../components/chat.vue"

export default {
    name: "siteTemplate",
    components: {
        Header,
        Chat
    }
}
</script>

<style scoped>

</style>