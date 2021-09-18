<template>
    <div class="feed-container">
        <headerOptions />
        <newPublication></newPublication>
        <div class="publications">
            <publication />
        </div>
    </div>
</template>

<script>
import newPublication from "../components/newPublication.vue"
import publication from "../components/publication.vue"
import headerOptions from "../components/headerOptions.vue"

export default {
    name: 'feed',
    components: {
        newPublication,
        publication,
        headerOptions
    }
}
</script>
<style scoped>

    .feed-container {
        width: 100%;
    }

    .publications {
        margin-top: 1.5rem;
        width: 100%;
        background: var(--white);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        padding: .4rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 420px) {
        .publications {
            margin-top: 1rem;
            padding: .6rem;
        }
    }

</style>
