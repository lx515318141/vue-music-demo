<template>
    <div>
        <Nav />
        
        <Carousel :bannerImg="swiperImg"/>
        <HomeTab />
        <HomeData />
    </div>
</template>
<script>
import Nav from "../../components/Nav"
import HomeData from "./HomeData"
import Carousel from "../../components/Carousel"
import HomeTab from "./HomeTab"

export default {
    name:"Home",
    data(){
        return{
            swiperImg:[
                require("../../assets/img/b1.jpg"),
                require("../../assets/img/b2.jpg"),
                require("../../assets/img/b3.jpg")
                // 在vue中引入图片，如果是在template中引入可以直接使用相对路径引用
                // 但是如果在js中引入图片则不能直接使用相对路径，需要通过require引入相对路径，或直接使用网址引入
            ]
        }
    },
    components:{
        Nav,
        HomeData,
        Carousel,
        HomeTab
    },
}
</script>

<style scoped>

</style>