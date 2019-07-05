<template>
    <div class="share_container">
        <span class="share_text">{{this.$t('first_share')}}</span>
        <img class="gPlus" src="@/assets/g+.png" v-show="showGPlus">
        <img class="inS" src="@/assets/in.png" v-show="showIns">
        <img class="faceb" src="@/assets/facebIcon.png">
        <img class="twitt" src="@/assets/twittIcon.png">
    </div>
</template>

<script>
    export default {
        name: "Share",
        props: {
            showGPlus: {
                default: false
            },
            showIns: {
                default: false
            }
        }
    }
</script>

<style scoped>
    .share_container {
        flex-direction: row;
        display: flex;
        align-items: center;
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
    }

    .gPlus{
        width: 24px;
        height: 24px;
        margin-right: 15px;
    }

    .inS {
        width: 12px;
        height: 12px;
        margin-right: 8px;
    }

    .faceb {
        width: 24px;
        height: 24px;
    }

    .twitt {
        width: 24px;
        height: 24px;
        margin-left: 10px;
    }
</style>
