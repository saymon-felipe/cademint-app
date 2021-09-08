<template>
    <div>
        <siteTemplate>
            <videoMeeting userInConference="2" participantsOffline="3" />
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