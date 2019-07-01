<template>
    <div>
        <ul class="img-container">
            <li class="img-card" v-for="item in goodslist" :key="item.id">
                <router-link :to = "'/home/goodsinfo/' + item.id">
                    <div class="imgback">
                        <img :src="item.img_url">
                    </div>
                    <div class="content">
                        <h4>{{item.title}}</h4>
                        <!--优惠信息-->
                        <!--优惠券 （过期时间）-->
                        <slot></slot>
                        <p class="price">
                            <span class="nowPrice">￥{{ item.sell_price }}</span>
                            <span class="bePrice">￥{{ item.market_price }}</span>
                        </p>
                        <p class="sell">
                            <span>热卖中</span>
                            <span>剩{{ item.stock_quantity }}件</span>
                        </p>
                    </div>
                </router-link>

            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                page: 1,
                goodslist: [],
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            async getGoodsList() {
                const {data} = await this.$http.get("/api/getgoods?pageindex=" + this.page);
                if (data.status === 0) {
                    this.goodslist = this.goodslist.concat(data.message);
                    // console.log(this.goodslist);
                }
            },
        },

    }
</script>

<style lang="scss">
    ul.img-container{
        margin: 0;
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li.img-card{
            width: 49%;
            height: 270px;
            vertical-align: middle;
            margin-bottom: 6px;
            padding: 0;
            border: 1px solid #c7ffdb;

            div.imgback{
                text-align: center;
                height: 160px;
                img {
                    width: 150px;
                }
            }
            div.content {
                margin-bottom: 0;
                padding-bottom: 0;
                height: 110px;
                // position: relative;
                h4{
                    font-size: 14px;
                    height: 50px;
                    margin: 0;
                    color: black;
                }
                p.price {
                    height: 30px;
                    margin: 0;
                    span.nowPrice {
                        color: red;
                        font-size: 16px;
                        font-weight: bold;
                        padding-right: 10px;
                        padding-top: 8px;
                    }
                    span.bePrice {
                        text-decoration: line-through
                    }
                }
                p.sell {
                    // position: absolute;
                    // bottom: 5px;
                    height: 30px;
                    margin: 5px 3px 0px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
    /*ul.img-container{*/
        /*margin: 0;*/
        /*padding: 0;*/
        /*li.img-card{*/
            /*width: 47%;*/
            /*height: 270px;*/
            /*display: inline-block;*/
            /*vertical-align: middle;*/
            /*margin: 5px;*/
            /*padding: 0;*/
            /*border: 1px solid #c7ffdb;*/

            /*div.imgback{*/
                /*text-align: center;*/
                /*height: 160px;*/
                /*img {*/
                    /*width: 150px;*/
                /*}*/
            /*}*/
            /*div.content {*/
                /*margin-bottom: 0;*/
                /*padding-bottom: 0;*/
                /*height: 110px;*/
                /*position: relative;*/
                /*h4{*/
                    /*font-size: 14px;*/
                /*}*/
                /*p.sell {*/
                    /*position: absolute;*/
                    /*bottom: 5px;*/
                    /*display: flex;*/
                    /*justify-content: space-between;*/
                /*}*/
                /*p.price {*/
                    /*position: absolute;*/
                    /*bottom: 30px;*/
                    /*display: flex;*/
                    /*justify-content: space-between;*/
                /*}*/
            /*}*/
        /*}*/
    /*}*/
</style>