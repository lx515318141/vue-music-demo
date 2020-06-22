<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                    <h3>{{ title }}</h3>
                    <router-link :to="{name:'More', params:{type: mType}}">
                        更多
                    </router-link>
                    <!-- <a>更多</a> -->
            </div>
            <div class="list clearfix" v-if="data.length>0">
                <router-link :to ="{name:'Player',params:{id:item.song_id}}" :class="{'clear-padding': index%3 !== 1}" v-for="(item,index) in data" :key="index" class="item">
                    <div class="img-wrapper">
                        <img :src="item.pic_radio" alt>
                    </div>
                    <div class="main">{{ setText(item.title) }}</div>
                    <div class="gray">{{ setText(item.author) }}</div>
                </router-link>
            </div>
            <div v-else>正在加载数据...</div>
        </div>
    </div>
</template>

<script>
// 首页歌单
export default {
    name:"MusicList",
    props:{
        data:{
            type:Array,
            default:function(){
                return []
            }
        },
        title:{
            type:String,
            default:""
        },
        mType:{
            type:[String,Number],
            default:""
        }
    },
    mounted(){
        
    },
    methods:{
        setText(text){
            if(text.length>8){
                text = text.substring(0,8)+"..."
                return text
            }
            return text
        }
    }
}
</script>
<style scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>