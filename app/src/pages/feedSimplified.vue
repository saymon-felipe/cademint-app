<template>
    <div>
        <siteTemplate>
            <feedSimplifiedComponent />
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import feedSimplifiedComponent from '../components/feedSimplifiedComponent.vue'

export default {
    name: "feed",
    components: {
        siteTemplate,
        feedSimplifiedComponent
    }
}
</script>

<style scoped>

</style>