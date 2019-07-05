<template>
    <div class="picture_container">
        <img class="picture" :src="picture">
        <div class="name_wrap" ref="nameRef">{{name}}</div>
        <div class="label_container">
            <span class="label_text">{{label}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PartThreePicture",
        props: {
            picture: {
                default: require('@/assets/part_3_picture_1.png')
            },
            name: {
                default: ""
            },
            label: {
                default: ""
            },
            name_color: {
                type: String,
                default: "#ffffff"
            }
        },

        watch: {
            name_color: {
                immediate: true,
                handler(newValue) {
                    console.log("name_color: " + newValue)
                    // this.$ref.style.color = newValue;
                    // let nameStyle = document.getElementsByClassName("name_wrap");
                    // for (let i = 0; i < nameStyle.length; i++) {
                    //     console.log("nameStyle color: " + newValue)
                    //     nameStyle[i].style.color = newValue;
                    // }
                }
            }
        }
    }
</script>

<style scoped>
    :root{
        --NAME-COLOR: #000e48;
    }

    .picture_container {
        position: relative;
        width: 350px;
        height: 368px;
    }

    .picture {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .name_wrap {
        position: absolute;
        left: 15px;
        top: 18px;
        color: #000e48;
        font-family: Lato;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    .label_container {
        position: absolute;
        right: 15px;
        top: 18px;
        height: 21px;
        background: #f6567e;
        border-radius: 3px;
        padding: 4px;
    }

    .label_text {
        color: #ffffff;
        font-size: 10px;
        font-weight: 400;
        font-family: Lato;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }
</style>
