<template>
    <div class="user-config">
        <div class="config-menu">
            <ul>
                <li v-on:click="showAccount()">
                    <h6>Conta</h6>
                </li>
                <li v-on:click="showPrivacity()">
                    <h6>Privacidade</h6>
                </li>
                <li v-on:click="showBlocked()">
                    <h6>Lista de Bloqueio</h6>
                </li>
            </ul>
        </div>
        <div class="config-container">
            <accountConfiguration v-if="account == 1" />
            <privacityConfiguration v-if="privacity == 1" />
            <blockedConfiguration v-if="blocked == 1" />
        </div>
    </div>
</template>

<script>
import accountConfiguration from '../components/accountConfiguration.vue'
import privacityConfiguration from '../components/privacityConfiguration.vue'
import blockedConfiguration from '../components/blockedConfiguration.vue'

export default {
    name: "userConfigComponent",
    methods: {
        resetVariables() {
            this.account = 0;
            this.privacity = 0;
            this.blocked = 0;
        },
        showAccount() {
            this.resetVariables();
            this.account = 1;
        },
        showPrivacity() {
            this.resetVariables();
            this.privacity = 1;
        },
        showBlocked() {
            this.resetVariables();
            this.blocked = 1;
        }
    },
    data() {
        return {
            account: 1,
            privacity: 0,
            blocked: 0
        }
    },
    components: {
        accountConfiguration,
        privacityConfiguration,
        blockedConfiguration
    }
}
</script>

<style scoped>
    .user-config {
        padding: 1rem;
        width: 100%;
        background: var(--white);
        border-radius: 10px;
        height: 100%;
        display: flex;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        position: relative;
    }

    .config-menu ul {
        list-style: none;
        width: 100%;
    }

    .config-menu ul li {
        height: 2.5rem;
        width: 100%;
        padding-left: 1rem;
        display: flex;
        align-items: center;
        border-radius: 5px 0 0 5px;
        cursor: pointer
    }

    .config-menu ul li:hover {
        background: var(--gray-high)
    }

    .config-menu ul li h6 {
        font-size: 1.2rem;
        font-weight: 600;
    }

    .config-menu {
        border-right: 3px solid var(--gray-medium);
        margin-top: 1rem;
        width: 35%;
        display: flex;
        justify-content: center;
    }

    .config-container {
        padding: 0 .7rem;
        width: 65%;
    }

    
</style>