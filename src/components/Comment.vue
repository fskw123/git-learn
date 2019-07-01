<template>
    <div>
        <h4>发表评论 -- {{ newsid }}次</h4>
        <textarea  id="comtext" cols="22" rows="3" class="comtext"
                   placeholder="请输入要BB的内容（最多吐槽120字）" v-model="msg">

        </textarea>
        <mt-button type="primary" size="large" @click="postComment()">发表评论</mt-button>
        <div class="comment-container">
            <ul class="comList">
                <li class="comItem" v-for="(item, i) in cmtlist" :key="i">
                    <p class="cominfo">
                        <span>第{{ i + 1 }} 楼</span>
                        <span>用户：{{ item.user_name }}</span>
                        <span>发表时间：{{ item.add_time | dateFormat }}</span>
                    </p>
                    <p class="comMessa">{{ item.content }}</p>
                </li>
            </ul>
            <mt-button plain size="large" type="danger" @click="loadMore()">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                page: 1,
                cmtlist: [],
                msg: '',

            }
        },
        created() {
            this.getComment()
        },
        methods: {
            async getComment() {
                const {data} = await this.$http.get(
                    "/api/getcomments/" + this.newsid +"?pageindex=" + this.page
                );
                if (data.status === 0) return (this.cmtlist = this.cmtlist.concat(data.message));
            },
            loadMore() {
                this.page++;
                this.getComment();

            },
            async postComment() {
                if (this.msg.trim().length <= 0) {
                    return Toast('请填写评论内容!')
                }else {
                    const {data} = await this.$http.post(
                        "/api/postcomment/" + this.newsid ,
                        {
                            content: this.msg.trim()
                        }
                    );
                    if (data.status === 0) {
                        this.cmtlist.unshift({
                            user_name: '匿名用户',
                            add_time: new Date(),
                            content: this.msg
                        })
                    }
                }

            }
        },
        props: ['newsid']
    }
</script>

<style lang="scss">
    div.comment-container {
        margin-bottom: 60px;
        ul.comList {
            list-style-type: none;
            margin: 0;
            padding-left: 0;
            li:first-child{
                margin-top:20px;
            }
            li.comItem{
                p.cominfo {
                    background-color: #9fdeff;
                    display: flex;
                    justify-content: space-between;
                    padding-left: 0;
                    span {
                        font-size: 13px;
                        color: #222222;
                    }
                }
                p.comMessa {
                    padding-left: 15px;
                }
            }
        }
    }

    textarea.comtext {
        margin-bottom: 10px;
    }

</style>