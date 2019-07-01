import Vue from 'vue'
// 创建 store 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)

// 每当初始化项目的时候，就先从 localStorage 中取一下数据
let car = window.JSON.parse(localStorage.getItem('cart') || '[]')

const store = new Vuex.Store({
    state: {
        cart: [],
    },
    // 1, 获的商品的id，向cart中添加商品， 并赋予 num 属性，初始为 1；
    // 2, 如果cart中 已经有相同商品，则刷新 num 属性， 1++;
    // 3, 商品加减操作，增加时，如果数量大于max， 则抛出 “超出库存"; 减少时，如果小于1，则从cart中删除该商品
    // 4, 提交cart，提交[{ id: , num: ,}, ... ]
    mutations: {
        addGoods(id) {
            this.cart.some(item => {
                if(item.id === id) {
                    item.num++
                } else{
                    var goods = {}
                    goods.id = id
                    goods.num = 1
                    this.cart.push(goods)
                }
            })
        },
        increment(item) {
            item.num ++
            if (item.num >= item.max) {
                // 抛出alert

            }
        },
        reduction(item) {
            item.num --
        },
        submitCart() {

        }
    }
    ,
    getters: {

    },
})

export default store