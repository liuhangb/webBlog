<template>
    <div class="part_two_container">
        <div class="left_content">
            <div class="part_1_headline">{{this.$t('second_part_1_headline')}}</div>
            <div class="author_info">
                <span class="part_1_author">{{this.$t('second_part_1_author')}}</span>
                <img class="clock_icon" src="@/assets/clock_icon.png">
                <span class="publish_time">{{this.$t('second_part_1_time')}}</span>
            </div>
            <img class="part_1_pic" src="@/assets/second_part_1_pic.png">
            <div class="left_footer">
                <button class="all_article_btn">
                    <span class="part_1_btn_text">{{this.$t('second_part_1_btn')}}</span>
                    <img class="left_arrow" src="@/assets/left_arrow.png">
                </button>
                <share class="share"></share>
            </div>
        </div>
        <div class="right_content">
            <part-two-chapter class="chapter_1" :img="require('@/assets/part_2_chapter_1.png')" :content="chapter_1_content()"
                              :headline="chapter_1_headline()"></part-two-chapter>
            <part-two-chapter class="chapter_2" :img="require('@/assets/part_2_chapter_2.png')" :content="chapter_2_content()"
                              :headline="chapter_2_headline()"></part-two-chapter>
            <part-two-chapter class="chapter_3" :img="require('@/assets/part_2_chapter_3.png')" :content="chapter_3_content()"
                              :headline="chapter_3_headline()"></part-two-chapter>
        </div>
    </div>
</template>

<script>
    import Share from "@/components/Share";
    import PartTwoChapter from "@/components/PartTwoChapter";

    export default {
        name: "PartTwo",
        components: {PartTwoChapter, Share},
        methods: {
            chapter_1_headline() {
                return this.$t('second_part_1_headline');
            },
            chapter_2_headline() {
                return this.$t('second_part_2_headline');
            },
            chapter_3_headline() {
                return this.$t('second_part_3_headline');
            },
            chapter_1_content() {
                return this.$t('second_part_1_content');
            },
            chapter_2_content() {
                return this.$t('second_part_2_content');
            },
            chapter_3_content() {
                return this.$t('second_part_3_content');
            },
        }
    }
</script>

<style scoped>
    .left_content {
        position: absolute;
        display: inline-block;
        margin-left: 95px;
        width: 446px;
        height: 890px;
    }

    .right_content {
        display: inline-block;
        margin-left: 641px;
        width: 541px;
        height: 890px;
    }

    .part_1_headline {
        color: #000e48;
        font-family: Lato;
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
    }

    .author_info {
        display: inline-block;
        margin-top: 48px;
    }

    .part_1_author {
        color: #000e48;
        font-family: Lato;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .clock_icon {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-left: 150px;
    }

    .publish_time {
        margin-left: 15px;
        color: #bdc8d6;
        font-family: Lato;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .part_1_pic {
        margin-top: 20px;
        width: 445px;
        height: 580px;
    }

    .all_article_btn {
        width: 255px;
        height: 51px;
        border-radius: 40px;
        background: #bdc8d6;
        text-align: center;
        /** 去除标签的立体感**/
        border: none;
    }

    .part_1_btn_text {
        color: #ffffff;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 700;
        line-height: 17px;
        vertical-align: middle;
    }

    .left_arrow {
        position: absolute;
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-left: 50px;
    }

    .share {
        margin-left: 40px;
    }

    .left_footer {
        display: flex;
        align-items: center;
        margin-top: 53px;
    }

    .chapter_1 {
        margin-bottom: 54px;
    }

    .chapter_2 {
        margin-bottom: 54px;
    }

    .chapter_3 {
    }
</style>
