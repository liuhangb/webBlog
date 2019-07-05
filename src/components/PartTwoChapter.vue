<template>
    <div class="chapter_container">
        <img class="chapter_img" :src="img">
        <div class="chapter_detail">
            <div class="chapter_headline">{{headline}}</div>
            <div class="chapter_content">{{content}}</div>
            <div class="read_more">{{this.$t('second_read_more')}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PartTwoChapter",
        props: {
            img: {
                default: require("@/assets/part_2_chapter_1.png")
            },
            headline: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .chapter_container {
        width: 541px;
        height: 261px;
    }

    .chapter_img {
        width: 256px;
        height: 259px;
    }

    .chapter_detail {
        position:relative;
        display: inline-block;
        vertical-align:top;
        width: 256px;
        height: 261px;
        margin-left: 25px;
    }

    .chapter_headline {
        width: 100%;
        color: #000e48;
        font-family: Lato;
        font-size: 28px;
        font-weight: 400;
        line-height: 37px;
    }

    .chapter_content {
        margin-top: 30px;
        width: 100%;
        color: #67687c;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }

    .read_more {
        position: absolute;
        bottom: 0;
        color: #1ebcd4;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }
</style>
