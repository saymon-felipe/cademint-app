<template>
    <div class="blocked-list-container">
        <h3>Lista de bloqueados</h3>
        <div class="blocked-list">
            <div class="blocked-user" v-for="blockedUser in findUser(this.mainUserId).blocked_users" v-bind:key="blockedUser">
                <div class="user">
                    <div class="blocked-user-avatar">
                        <img :src="requireImage(blockedUser)" class="avatar-p">
                    </div>
                    <div class="blocked-user-name">
                        <h6><strong>{{findName(blockedUser)}}</strong></h6>
                    </div>
                </div>
                <div class="unlock" v-on:click="unlockUser(blockedUser)">
                    <h4><strong>Desbloquear</strong></h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {globalMethods} from '../js/globalMethods.js'

export default {
    name: "blockedConfiguration",
    mixins: [globalMethods],
    methods: {
        unlockUser(id) {
            var index = this.findUser(this.mainUserId).blocked_users.indexOf(id);
            if (index != -1) {
                this.findUser(this.mainUserId).blocked_users.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
    .blocked-list-container {
        margin: auto;
        overflow: hidden;
        height: 100%;
    }

        .blocked-list-container h3 {
            text-align: center;
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 600;
        }

    .user {
        margin: auto;
        display: flex;
        align-items: center;
    }

    .blocked-user {
        margin: .5rem 0;
    }

        .blocked-user h4 {
            font-size: .7rem;
            text-transform: uppercase;
            text-align: end;
            margin-top: -.5rem!important;
            cursor: pointer;
        }

    .blocked-list {
        padding: 1rem;
        margin: 1rem 0;
        height: 100%;
        max-height: 60rem;
        overflow-y: scroll;
    }

    .blocked-user h4:hover{
        text-decoration: underline;
    }


    .blocked-user-avatar {
        margin-right: 1rem;
    }
</style>