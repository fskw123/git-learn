import VueRouter from 'vue-router'

import homeContainer from './components/HomeContainer.vue'
import memberContainer from './components/MemberContainer.vue'
import shopCar from './components/ShopCar.vue'
import searchContainer from './components/SearchContainer.vue'
import newsList from './components/NewList.vue'
import newInfo from './components/NewsInfo.vue'
import photoList from './components/PhotoList.vue'
import photoInfo from './components/PhotoInfo.vue'
import goodsList from './components/GoodsList.vue'
import goodsInfo from './components/GoodsInfo.vue'
import goodsDesc from './components/GoodsDesc.vue'
import goodsComment from './components/GoodsComment.vue'

// const routes = [
//     { path: '/home', component: homeContainer },
//     { path: '/member', component: memberContainer },
//     { path: '/shopCar', component: shopCar },
//     { path: '/search', component: searchContainer },
//     { path: '/home/newslist', component: newsList },
//     { path: '/home/newsinfo', component: newInfo },
//     { path: '/home/photolist', component: photoList },
//     { path: '/home/photoinfo', component: photoInfo },
//     { path: '/home/goodslist', component: goodsList },
//     { path: '/home/goodsdesc', component: goodsDesc },
//     { path: '/home/goodscomment', component: goodsComment },
// ]

const router = new VueRouter({
    routes: [
        { path: '/home', component: homeContainer },
        { path: '/member', component: memberContainer },
        { path: '/shopCar', component: shopCar },
        { path: '/search', component: searchContainer },
        { path: '/home/newslist', component: newsList },
        { path: '/home/newsinfo/:id', component: newInfo, props: true, },// 启用 props 接收路由
        { path: '/home/photolist', component: photoList },
        { path: '/home/photoinfo', component: photoInfo },
        { path: '/home/goodslist', component: goodsList },
        { path: '/home/goodsinfo/:id', component: goodsInfo, props: true,},
        { path: '/home/goodsdesc', component: goodsDesc },
        { path: '/home/goodscomment', component: goodsComment },
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮类, 替代 router-link-active
})

export default router