# 遇到的问题
## 1.swiper引入
    直接按照文档给的方法引入发生报错情况，报错：无法找到vue-awesome-swiper和swiper.css，但文件在项目中存在，又单独安装了一次swiper和在项目中找到swiper.css具体位置，修改了引入路径后，问题得以解决。
## 2.require引入图片
    在vue中引入图片，如果直接在template中引入，直接使用相对路径即可：
    "../../assets/img/b3.jpg"
    若在js中引用，则需要用require引入：
    require("../../assets/img/b3.jpg")
    或直接使用网址。
    但我在使用require时发生报错，经过查找找到解决办法：
    找到vue项目中的.eslintrc.js文件(如果没有就在根目录下创建一个)，加如下代码
    module.exports = {
        rules: {  
            "global-require": 0  
        },
    };
    然后重启项目。
## 3.vue组件缓存
    Props：
    include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
    exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
    max - 数字。最多可以缓存多少组件实例。
    用法：
    <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。
    当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
