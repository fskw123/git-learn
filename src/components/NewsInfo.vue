<template>
    <div>
        <div class="mui-media-body">
            <h5>{{ newsinfo.title }}</h5>
            <div class="info">
                <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
                <span>点击：{{ newsinfo.click }}次</span>
            </div>
            <hr/>
        </div>
        <div class="content" v-html="newsinfo.content"></div>

        <comment :newsid = 'id'></comment>
    </div>
</template>

<script>
    import comment from './Comment.vue'

    export default {
        data() {
            return {
                newsinfo:{}
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            async getNewsInfo() {
                const {data} = await this.$http.get("/api/getnew/" + this.id);
                if (data.status === 0) return (this.newsinfo = data.message[0]);
            },
        },
        props: ['id'],
        components: {
            comment,
        }
    }
</script>

<style lang="scss">
    div.mui-media-body{
       h5 {
           color: red;
           font-size:15px;
           font-weight: bold;
           text-align: center;
           padding-bottom: 12px;
           padding-top: 12px;
       }
        div.info {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
        hr {
            margin-top: 3px;
        }
    }
    div.content {
        padding-left: 4px;
        padding-right: 4px;
    }
</style>