<template>
    <div class="part_three_container">
        <div class="headline">{{this.$t('third_headline')}}</div>
        <div class="sub_headline">{{this.$t('third_sub_headline')}}</div>
        <part-three-content class="middle">
            <div class="picture_2">
                <div class="picture_2_top">
                    <img class="picture_2_top_img" src="@/assets/part_3_picture_2.png">
                    <div class="picture_2_time">{{this.$t('third_picture_2_time')}}</div>
                    <div class="picture_2_author">{{this.$t('third_picture_2_name')}}</div>
                    <div class="picture_2_share">
                        <img class="gPlus" src="@/assets/g+.png">
                        <img class="inS" src="@/assets/in.png">
                        <img class="faceB" src="@/assets/facebIcon.png">
                    </div>
                </div>
                <div class="picture_2_desc">{{this.$t('third_picture_2_desc')}}</div>
            </div>
        </part-three-content>
        <div class="bottom">
            <div class="learn_more">{{this.$t('learn_more')}}</div>
            <img class="arrow_down" src="@/assets/arrow_down.png">
        </div>
    </div>
</template>

<script>
    import PartThreeContent from "@/components/PartThreeContent";

    export default {
        name: "PartThree",
        components: {PartThreeContent},
    }
</script>

<style scoped>
    .part_three_container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .headline {
        color: #000e48;
        font-family: Lato;
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
        text-align: center;
    }

    .sub_headline {
        color: #000e48;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
        margin-top: 40px;
    }

    .middle {
        margin-top: 60px;
        margin-left: 95px;
        margin-right: 95px;
        width: 1111px;
        display: flex;
        justify-content: space-between;
    }

    .picture_1 {

    }

    .picture_2 {
        position: relative;
        width: 350px;
        height: 368px;
    }

    .picture_2_top {
        position: relative;
        width: 100%;
        height: 305px;
    }

    .picture_2_top_img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .picture_2_time {
        position: absolute;
        display: inline-block;
        left: 20px;
        top: 20px;
        color: #bdc8d6;
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .picture_2_author {
        position: absolute;
        display: inline-block;
        left: 20px;
        top: 39px;
        color: #bdc8d6;
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .picture_2_share {
        position: absolute;
        display: flex;
        align-items: center;
        left: 246px;
        top: 20px;
    }

    .gPlus{
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }

    .inS {
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }

    .faceB{
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }

    .picture_2_desc {
        position: absolute;
        width: 350px;
        color: #67687c;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        bottom: 0px;
    }

    .bottom {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        height: 45px;
    }

    .learn_more {
        color: #67687c;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
    }

    .arrow_down {
        width: 25px;
        height: 22px;
    }

</style>
