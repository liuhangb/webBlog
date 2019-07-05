<template>
    <div class="time_container">
        <img class="clock_icon" src="@/assets/clock_icon.png">
        <span class="publish_time">{{time}}</span>
    </div>
</template>

<script>
    export default {
        name: "PublishTime",
        props: {
            time: {
                type: String,
                default: ""
            }
        }
    }
</script>

<style scoped>
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
</style>
