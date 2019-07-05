<template>
    <div class="card_container">
        <img class="img" :src="img">
        <div class="content">{{content}}</div>
        <div class="bottom">
            <div class="name">{{name}}</div>
            <div class="time">{{time}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PartFiveCard",
        props: {
            img: {
                default: require('@/assets/part_5_picture_1.png')
            },
            content: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            time: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .card_container {
        position: relative;
        width: 255px;
        height: 458px;
    }

    .img {
        width: 255px;
        height: 232px;
    }

    .content {
        width: 255px;
        color: #67687c;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-top: 30px;
    }

    .name {
        color: #000e48;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 700;
        line-height: 17px;
    }
    .time {
        color: #67687c;
        font-family: Archivo;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        margin-top: 20px;
    }

    .bottom {
        position: absolute;
        bottom: 0px;
    }

</style>
