<template>
    <div class="video-meeting">
        <div class="container-feed">
            <div class="inner-container">
                <h3>Video: {{video}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
//import $ from 'jquery';

export default {
    name: 'videoMeeting',
    data() {
        return {
            video: this.$route.params.video
        }
    }
}
</script>

<style scoped>

</style>
