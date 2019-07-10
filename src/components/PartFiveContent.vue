<template>
    <div>
        <part-five-card class="card_1" :img="require('@/assets/part_5_picture_1.png')"
                        :content="this.$t('five_picture_1_desc')"
                        :name="this.$t('five_picture_1_author')"
                        :time="this.$t('five_picture_1_time')"></part-five-card>

        <part-five-card class="card_2" :img="require('@/assets/part_5_picture_2.png')"
                        :content="this.$t('five_picture_2_desc')"
                        :name="this.$t('five_picture_2_author')"
                        :time="this.$t('five_picture_2_time')"></part-five-card>
        <slot></slot>
    </div>
</template>

<script>
    import PartFiveCard from "@/components/PartFiveCard";
    export default {
        name: "PartFiveContent",
        components: {PartFiveCard}
    }
</script>

<style scoped>
    .card_2 {
        margin-left: 30px;
    }
</style>
