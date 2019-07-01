<template>
    <div id="app-container">
        <mt-header fixed title="固定在顶部">
        <span slot="left" @click="goBack()">
            <mt-button icon="back">返回</mt-button>
        </span>
        </mt-header>

        <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/shopCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
        </router-link>
        </nav>

    </div>
</template>

<script>
    import Vue from 'vue'

    import homeContainer from './HomeContainer.vue'

    import { Header, Button } from 'mint-ui'

    Vue.component(Header.name, Header)
    Vue.component(Button.name, Button)


	export default {
        data() {
            return {
                    flag: true,// 默认显示返回按钮
                }
		},
        created: function() {
            if (this.$route.path === "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }
        },
		methods: {
            goBack() {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            },
		},
        components: {
            homeContainer
        }

	}
</script>

<style lang="scss" scoped>
    #app-container {
        padding-top: 40px;
    }
    .mui-bar-tab .mui-tab-item-llb .mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-llb {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .my-tab-item-llb .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .my-tab-item-llb .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
