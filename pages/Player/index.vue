<template>
    <div class="play" v-if="playInfo.songinfo">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p>{{ playInfo.songinfo.title }}</p>
                    <p class="author">{{ playInfo.songinfo.author }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>
        <div class="song-info">
            <div class="song-info-img">
                <img :src="playInfo.songinfo.pic_radio">
                <Lyric :songid="this.$route.params.id" :currentTime="currentTime" :duration="duration"/>
            </div>
            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>
        <div class="song">
            <audio ref="player" class="player" controls :src="playInfo.bitrate.file_link"></audio>
        </div>
    </div>
</template>

<script>
import Lyric from "../../components/Lyric"
export default {
    name:"Player",
    data(){
        return{
            playInfo:{},
            currentTime:"",
            duration:""
        }
    },
    components:{
        Lyric
    },
    mounted(){
        this.$api.playerData({
            method:"baidu.ting.song.play",
            songid:this.$route.params.id
        })
        .then((res)=>{
            this.playInfo = res.data
            // 此时DOM还没更新，因为v-if的关系，audio还没有被渲染到页面，无法获取

            // 常见面试题
            this.$nextTick(function(){
                // 此时DOM已经更新,是可以获取DOM节点
                // this绑定到当前实例
                this.playerAddListener()
            })

            // 使用setTimeout可以实现，因为setTimeout会延时执行，延时后DOM已经被渲染出来了，可以获取到。
            // 但是不要使用该方法，工作中不允许，非延时的需求不能使用setTimeout
            // setTimeout(()=>{
            //     console.log(this.$refs.player);
            // })
            
        })
    },
    methods:{
        playerAddListener(){
            //歌曲当前播放时间
            this.$refs.player.addEventListener("timeupdate", this.currentTimeHandler)
            //歌曲总时长
            this.$refs.player.addEventListener("canplay", this.durationHandler)
        },
        playerRemoveListener(){
            this.$refs.player.removeEventListener("timeuodate",this.currentTimeHandler)
            this.$refs.player.removeEventListener("canplay",this.durationHandler)
        },
        currentTimeHandler(){
            this.currentTime = this.$refs.player.currentTime
        },
        durationHandler(){
            this.duration = this.$refs.player.duration
        }
    },
    beforeDestroy(){
        this.playerRemoveListener()
    }
}
</script>

<style scoped>
.play{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header {
    padding: 15px;
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

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
    flex:1;
    display: flex;
    flex-direction: column;
}

.song-info-img {
    text-align: center;
    flex: 1 1;
    display: flex;
    flex-direction: column;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
    margin: 0 auto;
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>