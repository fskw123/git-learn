<template>
    <div>
        <ul class="mui-table-view" >
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to='"/home/newsinfo/" + item.id'>
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h5>{{ item.title }}</h5>
                        <div class="content">
                            <span>发表时间：{{ item.add_time | dateFormat }}</span>
                            <span>点击: {{ item.click }}次</span>
                        </div>
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
                newslist: [],
            }
        },
        created: function () {
            this.getNewsList()

        },

        methods: {
            async getNewsList() {
                // 获取新闻列表
                const {data} = await this.$http.get("/api/getnewslist");
                // 如果获取数据成功，则把数据挂载到 data上
                if (data.status === 0) return (this.newslist = data.message);
            },
        },
        // props: ['']

    }
</script>

<style lang="scss">
    ul.mui-table-view{
        padding-bottom: 50px;
        div.mui-media-body {
            h5 {
                color: #171717;
            }
            div.content {
                display: flex;
                justify-content: space-between;
                span {
                    font-size: 12px;
                    color: #94948f;
                }
            }
        }
    }



</style>
