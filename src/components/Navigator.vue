<template>
    <div class="nav_container">
        <div class="nav_content">
            <img class="top_left_log" src="@/assets/home_top_left_logo.png"/>
            <span class="joinText">{{this.$t('join_us')}}</span>
            <span class="loginText">{{this.$t('login')}}</span>
        </div>
        <el-dropdown class="menu_list">
            <img class="menu_icon" src="@/assets/home_menu_icon.png"/>
            <el-dropdown-menu slot="dropdown">
                <router-link class="link" to="/partOne">
                <el-dropdown-item>{{this.$t('part_one')}}</el-dropdown-item>
                </router-link>
                <router-link class="link" to="/partTwo">
                    <el-dropdown-item>{{this.$t('part_two')}}</el-dropdown-item>
                </router-link>
                <router-link class="link" to="/partThree">
                    <el-dropdown-item>{{this.$t('part_three')}}</el-dropdown-item>
                </router-link>
                <router-link class="link" to="/partFour">
                    <el-dropdown-item>{{this.$t('part_four')}}</el-dropdown-item>
                </router-link>
                <router-link class="link" to="/partFive">
                    <el-dropdown-item>{{this.$t('part_five')}}</el-dropdown-item>
                </router-link>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Navigator"
    }
</script>

<style scoped>
    .nav_container {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        text-align: center;
    }

    .top_left_log {
        width: 39px;
        height: 20px;
        margin-left: 28px;
    }

    .menu_icon {
        width: 24px;
        height: 24px;
    }

    .nav_content {
        color: #000e48;
        font-family: Archivo;
        font-size: 16px;
        font-weight: 700;
        align-items: center;
        display: -webkit-flex;
    }

    .joinText {
        display: inline-block;
        margin-left: 1050px;

        background-color: white;
    }

    .loginText {
        margin-left: 30px;
        background-color: white;
    }

    .menu_list {
        position: absolute;
        left: 940px;
    }

    .link {
        text-decoration: none;
    }
</style>
