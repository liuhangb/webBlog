<template>
    <div class="part_one_container">
        <img class="part_one_pic_1" src="@/assets/part_one_pic_1.png">
        <div class="detail">
            <span class="first_author">{{this.$t('first_author')}}</span>
            <div class="time_container">
                <img class="clock_icon" src="@/assets/clock_icon.png">
                <span class="publish_time">{{this.$t('first_publish_time')}}</span>
            </div>
            <div class="headline_container">
            <div class="headline">{{this.$t('first_headline_1')}}</div>
            <div class="headline">{{this.$t('first_headline_2')}}</div>
            <div class="headline">{{this.$t('first_headline_3')}}</div>
            </div>
            <div class="content">{{this.$t('first_content')}}</div>
            <div class="detail_footer">
                <span class="learn_more">{{this.$t('learn_more')}}</span>
                <img class="left_arrow" src="@/assets/left_arrow.png">
                <span class="share_text">{{this.$t('first_share')}}</span>
                <img class="faceb" src="@/assets/facebIcon.png">
                <img class="twitt" src="@/assets/twittIcon.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PartOne"
    }
</script>

<style scoped>
    .part_one_container {
    }
    .part_one_pic_1 {
        width: 560px;
        height: 700px;
    }

    .detail {
        display: inline-block;
        position: absolute;
        margin-top: 80px;
        margin-left: 40px;
    }

    .first_author {
        color: #000e48;
        font-family: Lato;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .time_container {
        position: absolute;
        display: inline-block;
        margin-left: 205px;
        width: 184px;
    }

    .clock_icon {
        width: 24px;
        height: 24px;
        vertical-align: middle
    }

    .publish_time {
        color: #bdc8d6;
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.1px;
        margin-left: 40px;
    }

    .headline_container {
        margin-top: 40px;
    }

    .headline {
        color: #000e48;
        font-family: Lato;
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
    }

    .content {
        width: 444px;
        color: #67687c;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-top: 40px;
    }

    .detail_footer {
        margin-top: 80px;
        align-items:center; display: -webkit-flex;
    }

    .learn_more {
        color: #67687c;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }

    .left_arrow {
        margin-left: 64px;
        width: 24px;
        height: 24px;
    }

    .share_text {
        color: #000e48;
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
        margin-left: 260px;
        margin-right: 30px;
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
