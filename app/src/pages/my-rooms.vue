<template>
    <div>
        <siteTemplate>
            <myRoomsComponent />
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import myRoomsComponent from '../components/myRooms.vue'

export default {
    name: "myRooms",
    components: {
        siteTemplate,
        myRoomsComponent
    }
}
</script>

<style scoped>

</style>