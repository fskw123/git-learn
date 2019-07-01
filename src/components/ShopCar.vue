<template>
    <div>
        <div class="shopcar-card">
            <mt-switch v-model="value"></mt-switch>
            <img src="">
            <div>
                <h3>华为手机真牛逼</h3>
                <span>￥{{}}</span>
                <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                    <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
                    <input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox"  />
                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                </div>
                <span>删除</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Switch } from 'mint-ui';
    Vue.component(Switch.name, Switch);
</script>

<style lang="scss">
    div.shopcar-card {
        margin: 10px;
        border: 1px solid #b9f8f6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 108px;
        img{
            width: 40px;
            height: 50px;
            // position: relative;
            // top: -5px;
            margin-top: -10px;
        }
    }
</style>