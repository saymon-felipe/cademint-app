<template>
    <div>
        <siteTemplate>
            <videoMeeting />
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import videoMeeting from '../components/video-meeting.vue'

export default {
    name: "meeting",
    components: {
        siteTemplate,
        videoMeeting
    }
}
</script>

<style scoped>

</style>