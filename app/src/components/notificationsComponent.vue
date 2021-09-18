<template>
    <div class="notifications-component">
        <div class="notifications-list">
            <div class="notification" v-on:click="goToNotificationOrigin()">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>
            <div class="notification">
                teste
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'notificationsComponent',
    methods: {
        goToNotificationOrigin() {
            console.log("teste");
        }
    }
}
</script>

<style scoped>
    .notifications-component {
        position: absolute;
        width: 50%;
        height: 10rem;
        border-radius: 10px;
        background: var(--white);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        padding: .3rem;
        bottom: -10.5rem;
        left: 0;
        display: none;
        z-index: 3;
        overflow: hidden;
    }

    @media (max-width: 1159px) {
        .notifications-component {
            width: 65%;
        }  
    }
    @media (max-width: 460px) {
        .notifications-component {
            width: 75%;
        }  
    }
    @media (max-width: 330px) {
        .notifications-component {
            width: 100%;
        }  
    }

    .notifications-list {
        height: 100%;
        overflow-y: scroll;
    }
</style>