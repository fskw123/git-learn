<template>
    <div>
        <!--<swiper></swiper>-->
        <div>
            <h4>{{ goodsinfo.title }}</h4>
            <p>
                <span>市场价：{{ goodsinfo.market_price }}</span>
                <span>销售价： {{ goodsinfo.sell_price }}</span>
            </p>

            <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
                <input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox"  />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>

            <mt-button @click="">立即购买</mt-button>
            <mt-button @click="">加入购物车</mt-button>
            hhhhahhahahahh
        </div>
        <div>
            <h3>商品参数</h3>
            <p>商品货号：{{ goodsinfo.goods_no }}</p>
            <p>库存情况: {{ goodsinfo.stock_quantity }}件</p>
            <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
            <!--<router-link :to="">-->
                <!--<mt-button >图文介绍</mt-button>-->
            <!--</router-link>-->

            <!--<router-link :to="">-->
                <!--<mt-button>商品评论</mt-button>-->
            <!--</router-link>-->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodsinfo: {},
                id: this.$route.params.id,
            }
        },
        created() {
            // this.getGoodsInfo();
            this.getGoodsInfoById();
        },
        methods: {
            // async getGoodsInfo() {
            //     const {data} = await this.$http.get("/api/goods/getinfo/ "+ this.id);
            //     if (data.status === 0) return (this.goodsinfo = data.message[0]);
            // },
            async getGoodsInfoById() {
                // 根据ID获取商品的参数
                const { data } = await this.$http.get("/api/goods/getinfo/" + this.id);
                if (data.status === 0) return (this.goodsinfo = data.message[0]);
            },
        },

    }
</script>

<style lang="scss">

</style>