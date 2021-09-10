<template>
    <div class="end-meeting-container">
        <h4>Video chamada encerrada!</h4>
        <img src="../assets/img/logo-cademint-v2-reduced.png" class="logo-end-meeting">
    </div>
</template>

<script>
export default {
    name: "endMeeting"
}
</script>

<style scoped>
    .end-meeting-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo-end-meeting {
        width: 20%;
        margin: 1rem 0 .5rem;
    }
</style>