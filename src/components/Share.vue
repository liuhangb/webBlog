<template>
    <div class="share_container">
        <span class="share_text">{{this.$t('first_share')}}</span>
        <img class="faceb" src="@/assets/facebIcon.png">
        <img class="twitt" src="@/assets/twittIcon.png">
    </div>
</template>

<script>
    export default {
        name: "Share"
    }
</script>

<style scoped>
    .share_container {
        display: inline-block;
    }

    .share_text {
        color: #000e48;
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
        margin-right: 30px;
        vertical-align: middle;
    }

    .faceb {
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }

    .twitt {
        width: 24px;
        height: 24px;
        margin-left: 10px;
        vertical-align: middle;
    }
</style>
