<template>
    <div>
        <siteTemplate>
            <profile />
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import profile from '../components/profile.vue'

export default {
    name: "profilePage",
    components: {
        siteTemplate,
        profile
    }
}
</script>

<style scoped>

</style>