<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id === 0 ? 'mui-active' : '' ]"
                       v-for="item in category" :key="item.id" @click="getPhotoByCategory(item.id)">
                        {{ item.title }}

                    </a>

                </div>
            </div>
        </div>

        <ul class="lazyul">
            <router-link tag="li" v-for="item in photolist" :key="item.id" :to="'/home/photoinfo/' + item.id">
                <!-- 注意： v-lazy 要指定图片的地址 -->
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-content">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>


    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                category: [],
                photolist: []
            }
        },
        created() {
            this.getPhotoCategory();
            this.getPhotoByCategory(0);

        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            });
        },
        methods: {
            async getPhotoCategory() {
                // 获取图片的分类数据
                const { data } = await this.$http.get("/api/getimgcategory");
                if (data.status === 0) {
                    // 手动补全分类的信息
                    data.message.unshift({ title: "全部", id: 0 });
                    this.category = data.message;
                }
                // console.log(data.message)
            },
            async getPhotoByCategory(id) {
                // 根据图片分类的Id获取图片的数据
                const { data } = await this.$http.get("/api/getimages/" + id);
                if (data.status === 0) return (this.photolist = data.message);
                console.log(this.photolist)
            },

        },
        components: {

        }

    }
</script>

<style lang="scss">
    * {
        touch-action: pan-y;
    }
    ul.lazyul {
        list-style: none;
    }
</style>

