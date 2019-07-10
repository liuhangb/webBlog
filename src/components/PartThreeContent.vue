<template>
    <div class="middle">
        <part-three-picture ref="picture_1" class="picture_1" v-bind="picture_1"></part-three-picture>
        <slot></slot>
        <part-three-picture ref="picture_2" class="picture_3" v-bind="picture_2"></part-three-picture>
    </div>
</template>

<script>
    import PartThreePicture from "@/components/PartThreePicture";

    export default {
        name: "PartThreeContent",
        components: {PartThreePicture},
        data() {
            return {
                picture_1: {
                    name: this.$t('third_picture_1_name'),
                    label: this.$t('third_picture_1_label'),
                    picture: require('@/assets/part_3_picture_1.png')
                },

                picture_2 : {
                    name: this.$t('third_picture_3_name'),
                    label: this.$t('third_picture_3_label'),
                    picture: require('@/assets/part_3_picture_3.png')
                }
            }
        },
    }
</script>

<style scoped>

</style>
