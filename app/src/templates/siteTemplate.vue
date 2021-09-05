<template>
    <div>
        <Header :userId="user001.id"/>
        <div class="main-container">
            <div class="inner-container">
                <slot/>
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
    },
    data() {
        return {
            //Users de teste
            user001: {
                id: 1,
                name: "Saymon Felipe",
                avatar: "./assets/img/test/img-user-test-1.jpg",
                is_online: true,
                status_text: "Jogando lol com a raposa mais linda de sempre!!!",
                friends: [2, 3, 4],
                age: 19,
                ranking_position: 682
            }
            /*user002: {
                id: 2,
                name: "Ana Clara",
                avatar: "assets/img/test/girl1.png",
                is_online: true,
                status_text: "Escutando BlackPink e jogando lol, venha jogar comigo onii-san!!! 😍😍🎵",
                friends: [1, 3, 4],
                age: 19,
                ranking_position: 28
            },
            user003: {
                id: 3,
                name: "Cristina Gonçalves",
                avatar: "assets/img/test/girl3.png",
                is_online: false,
                status_text: "",
                friends: [1, 2, 4],
                age: 17,
                ranking_position: 830
            }*/
        }
    }
}
</script>

<style scoped>

</style>