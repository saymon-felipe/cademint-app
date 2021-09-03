<template>
    <div>
        <siteTemplate>
            <h2>profile {{id}}</h2>
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'

export default {
    name: "profile",
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        siteTemplate
    }
}
</script>

<style scoped>

</style>