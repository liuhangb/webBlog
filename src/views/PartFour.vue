<template>
    <div class="part_four_container">
        <div class="left">
            <div class="left_headline">{{this.$t('four_headline')}}</div>
            <div class="left_chapter">{{this.$t('four_chapter')}}</div>
            <div class="left_bottom">
                <div class="left_bottom_top">
                    <span class="author">{{this.$t('four_author')}}</span>
                    <publish-time class="time" :time="this.$t('four_publish_time')"></publish-time>
                </div>
                <div class="left_bottom_middle">{{this.$t('four_content')}}</div>
                <div class="left_bottom_bottom">
                    <span class="more">{{this.$t('four_next_hint')}}</span>
                    <img class="left_arrow" src="@/assets/left_arrow.png">
                </div>
            </div>
        </div>
        <div class="right">
            <img class="right_pic" src="@/assets/part_4_picture_1.png">
        </div>
    </div>
</template>

<script>
    import PublishTime from "@/components/PublishTime";
    export default {
        name: "PartFour",
        components: {PublishTime}
    }
</script>

<style scoped>
    .part_four_container {
        display: flex;
    }
    .left {
        width: 445px;
        height: 632px;
        margin-left: 95px;
        position: relative;
    }

    .right {
        position: relative;
        width: 695px;
        height: 692px;
    }

    .left_headline {
        width: 350px;
        height: 240px;
        color: #000e48;
        font-family: Lato;
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
    }

    .left_chapter {
        position: absolute;
        left: 380px;
        top: 0px;
        width: 65px;
        height: 37px;
        color: #000e48;
        font-family: Lato;
        font-size: 28px;
        font-weight: 400;
        line-height: 37px;
        text-align: right;
    }

    .left_bottom {
        position: absolute;
        bottom: 0px;
        width: 350px;
        height: 171px;
    }

    .left_bottom_top {
        position: relative;
    }

    .author {
        color: #000e48;
        font-family: Lato;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .time {
        position: absolute;
        right: 0;
        top: 0;
    }

    .left_bottom_middle {
        color: #67687c;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-top: 24px;
    }

    .left_bottom_bottom {
        position: absolute;
        display: flex;
        bottom: 0;
        align-items: center;
    }
    .more {
        color: #67687c;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }

    .left_arrow {
        margin-left: 48px;
        width: 24px;
        height: 24px;
    }

    .right_pic {
        width: 100%;
        height: 100%;
    }
</style>
