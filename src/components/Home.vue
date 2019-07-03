<template>
    <div>
        <navigator></navigator>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigator from "@/components/Navigator";
    export default {
        name: "Home",
        components: {Navigator}
    }
</script>

<style scoped>

</style>
