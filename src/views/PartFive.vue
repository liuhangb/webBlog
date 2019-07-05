<template>
    <div class="part_five_container">
        <div class="headline">{{this.$t('five_headline')}}</div>
        <div class="sub_headline">{{this.$t('five_sub_headline')}}</div>
        <div class="content">
            <part-five-card class="card_1" :img="require('@/assets/part_5_picture_1.png')"
                            :content="this.$t('five_picture_1_desc')"
                            :name="this.$t('five_picture_1_author')"
                            :time="this.$t('five_picture_1_time')"></part-five-card>

            <part-five-card class="card_2" :img="require('@/assets/part_5_picture_2.png')"
                            :content="this.$t('five_picture_2_desc')"
                            :name="this.$t('five_picture_2_author')"
                            :time="this.$t('five_picture_2_time')"></part-five-card>
            <div class="card_3">
                <img class="card_3_img" src="@/assets/part_5_picture_3.png">
                <div class="card_3_bottom">
                    <div class="card_3_bottom_top">
                        <span class="card_3_author">{{this.$t('five_picture_3_author')}}</span>
                        <share class="card_3_share" show-g-plus="true" show-ins="true"></share>
                    </div>
                    <div class="card_3_time">{{this.$t('five_picture_3_time')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PartFiveCard from "@/components/PartFiveCard";
    import Share from "@/components/Share";

    export default {
        name: "PartFive",
        components: {Share, PartFiveCard}
    }
</script>

<style scoped>
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
        margin-top: 33px;
    }

    .content {
        position: relative;
        display: flex;
        margin-top: 60px;
        width: 1110px;
        height: 458px;
        margin-left: 95px;
    }

    .card_2 {
        margin-left: 30px;
    }

    .card_3 {
        width: 445px;
        height: 458px;
        margin-left: 116px;
    }

    .card_3_img {
        width: 100%;
        height: 386px;
    }

    .card_3_bottom_top {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 445px;
    }

    .card_3_author {
        color: #000e48;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 700;
        line-height: 17px;
    }

    .card_3_time {
        color: #67687c;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        margin-top: 10px;
    }

    .card_3_share {

    }

    .card_3_bottom {
        position: absolute;
        bottom: 0;
    }
</style>
