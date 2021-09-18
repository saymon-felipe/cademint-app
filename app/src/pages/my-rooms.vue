<template>
    <div>
        <siteTemplate>
            <headerOptions />
            <myRoomsComponent />
        </siteTemplate>
    </div>
</template>

<script>
import siteTemplate from '../templates/siteTemplate.vue'
import myRoomsComponent from '../components/myRooms.vue'
import headerOptions from '../components/headerOptions.vue'

export default {
    name: "myRooms",
    components: {
        siteTemplate,
        myRoomsComponent,
        headerOptions
    }
}
</script>

<style scoped>

</style>