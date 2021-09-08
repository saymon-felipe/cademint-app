<template>
    <div class="container-photo">
        <div class="photos-list">
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
            <div class="photo">
                <img src="../assets/img/test/img-user-test-1.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profilePhoto"
}
</script>

<style scoped>
    .photo {
        margin: .4rem
    }

    .photo img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
    }

    .photos-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-right: -.5rem;
    }

</style>