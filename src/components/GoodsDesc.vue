<template>
    <div>
        <div>
            <h3>{{}}</h3>
        </div>
        <div v-html="" v-mytip.right="你好呀"></div>
        <!--监听用户浏览商品时间，超过一定返回给后台-->
        <!--主题动态切换，vip，相应的功能-->
        <!--用户修改地址未保存，路由跳转提醒-->
        <!--节流与防抖-->
        <!--销量排序-->
        <!--选购与提交页面，提交页面对产品数量进行样式，数量第二次改变-->
        <!--边框变亮，图片透明度发生变化-->
        <!--登录界面-->
    </div>
</template>

<script>
Vue.directive('mytip', {
    bind: function (el, binding, vnode) {
        let flag = false;
        el.onmouseover = function () {
            if (!flag) {
                let newEle = document.createElement('div');
                newEle.id = 'tip';
                newEle.className = 'tips' + Object.keys(binding.modifiers)[0];
                newEle.innerHTML = binding.expression;
                el.append(newEle);
                flag = true;
            }
        };
        el.onmouseout = function () {
            document.getElementById('tip').remove(); // remove 与 removeChild
            flag=false;
        }
    }
})
// 验证表单
let maxchars = Vue.directive("maxchars", {
    bind: function(el, binding, vnode) {
        var max_chars = binding.expression;
        var handler = function(e) {
            if (e.target.value.length > max_chars) {
                e.target.value = e.target.value.substr(0, max_chars);
            }
        };
        el.addEventListener("input", handler);
    }
});

-
</script>
.tips{
position: absolute;
width: 100px;
height: 50px;
background: #000;
color: #fff;
text-align: center;
}
.tips.left{
left: 130px;
top: 25px;
}
.tips.right{
right: 130px;
top: 25px;
}
.tips.top{
left: 50%;
margin-left: -50px;
top: -75px;
}
.tips.bottom{
left: 50%;
margin-left: -50px;
bottom: -75px;
}
.tips:after{
position: absolute;
border:10px solid transparent;
content: "";
}
<style lang="scss">

</style>