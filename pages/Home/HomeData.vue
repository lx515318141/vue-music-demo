<template>
    <div>
        <MusicList title="今日推荐" mType="1" v-if="todayRecommend.length>0" :data="todayRecommend"/>
        <MusicList title="热门推荐" mType="2" v-if="hotMusic.length>0" :data="hotMusic"/>
        <MusicList title="摇滚歌曲" mType="11" v-if="rockMusic.length>0" :data="rockMusic"/>
        <MusicList title="欧美歌曲" mType="21" v-if="westMusic.length>0" :data="westMusic"/>
    </div>
</template>
<script>
import MusicList from "../../components/MusicList"
export default {
    name:"HomeData",
    data(){
        return{
            todayRecommend:[],
            hotMusic:[],
            rockMusic:[],
            westMusic:[]
        }
    },
    components:{
        MusicList
    },
    mounted(){
        this.$api.getTodayRecommend({
            method:"baidu.ting.billboard.billList",
            type:1,
            size:6,
            offset:0
        }).then(res => {
            this.todayRecommend = res.data.song_list
        })
        this.$api.getTodayRecommend({
            method:"baidu.ting.billboard.billList",
            type:2,
            size:6,
            offset:0
        }).then(res => {
            this.hotMusic = res.data.song_list
        })
        this.$api.getTodayRecommend({
            method:"baidu.ting.billboard.billList",
            type:11,
            size:3,
            offset:0
        }).then(res => {
            this.rockMusic = res.data.song_list
        })
        this.$api.getTodayRecommend({
            method:"baidu.ting.billboard.billList",
            type:21,
            size:3,
            offset:0
        }).then(res => {
            this.westMusic = res.data.song_list
        })
    },
    
}
</script>
<style scoped>

</style>