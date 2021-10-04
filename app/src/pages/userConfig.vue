<template>
    <siteTemplate>
        <userConfigComponent />
    </siteTemplate>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import userConfigComponent from '../components/userConfigComponent.vue'

export default {
    name: 'userConfig',
    components: {
        siteTemplate,
        userConfigComponent
    }
}
</script>

<style scoped>

</style>