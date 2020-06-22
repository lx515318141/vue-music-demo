<template>
    <div>
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p class="song-title">{{ title }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>
        <div class="list clearfix" v-if="MusicList.length>0">
            <router-link :to="{name:'Player',params:{id:item.song_id}}" :class="{'clear-padding': index%3 !== 1}" v-for="(item,index) in MusicList" :key="index" class="item">
                <div class="img-wrapper">
                    <img :src="item.pic_radio" alt>
                </div>
                <div class="main">{{ setText(item.title) }}</div>
                <div class="gray">{{ setText(item.author) }}</div>
            </router-link>
        </div>
        <div v-else>正在加载数据...</div>
    </div>
</template>

<script>
    export default {
        name:'More',
        components:{
            
        },
        data(){
            return{
                MusicList:[],
                title:''
            }
        },
        props:{
            
        },
        created() {
            console.log(123);    
        },
        destroyed() {
            console.log('destroyed');
        },
        mounted(){
            let _this = this;
            this.$api.getTodayRecommend({
                method: "baidu.ting.billboard.billList",
                type: this.$route.params.type,
                size: 24,
                offset: 0
            }).then(res => {
                this.MusicList = res.data.song_list;
            });
            console.log(this.$route.params.type)
            switch(this.$route.params.type){
                case "1":
                _this.title = '今日推荐'
                break;
                case "2":
                _this.title = '热门推荐'
                break;
                case "11":
                _this.title = '摇滚歌曲'
                break;
                case "22":
                _this.title = '经典歌曲'
                break;
                case "16":
                _this.title = '流行歌曲'
                break;
                case "21":
                _this.title = '欧美金曲'
                break;
            }
        },
        methods:{
            setText(text){
                if(text.length > 8){
                    text = text.substring(0,8)+"...";
                    return text;
                }
                return text;
            }
        }
    }
</script>

<style  scoped>
.header {
    padding:15px 15px 12px 15px;
    background-color: #fff;
    margin-bottom: 2px;
}
.music-info {
    flex: 1;
    font-size: 20px;
}
.title {
    display: flex;
    text-align: center;
}
.left {
    font-size: 30px;
}
.song-title{
    font-weight: 600;
}
.right {
    font-size: 30px;
}
.list {
    width: 100%;
    padding: 5px 4px;
    background-color: #fff;
}
.list .item {
    float: left;
    width: 30.8%;
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
</style>