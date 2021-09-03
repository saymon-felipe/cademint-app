<template>
    <div>
        <siteTemplate>
            <Feed />
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import Feed from '../components/feed.vue'

export default {
    name: "myFeed",
    components: {
        siteTemplate,
        Feed
    }
}
</script>

<style scoped>

</style>