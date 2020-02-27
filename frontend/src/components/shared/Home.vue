<template>
    <div>
        <app-server-status v-for="i in 5" :key="i"></app-server-status>
    </div>
</template>

<script>
    import ServerStatus from "@/components/server/ServerStatus";

    export default {
        name: "Home",
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>

<style scoped>

</style>
