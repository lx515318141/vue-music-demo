<template>
    <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in bannerImg" :key="index">
                <div class="banner">
                    <img :src="item" alt="">
                </div>
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>    
</template>

<script>
// 轮播插件
export default {
    name:"Carousel",
    data(){
        return{
            swiperOption:{
                pagination: {
                    el: ".swiper-pagination"
                },
                loop:true,
                autoplay:true
            },
        }
    },
    props:{
        bannerImg:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
}
</script>>

<style scoped>
.banner{
    padding: 10px;
}
.banner img{
    border-radius: 10px;
}
</style>