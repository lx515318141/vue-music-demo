<template>
    <div  class="lrcContainer">
        <!-- {{ duration }}-{{ currentTime }} -->
        <!-- <p v-if="currentTime >= allKeys[index] && currentTime < allKeys[index+1] " v-for="(value,key,index) in lyricContent" :key="index">{{ value }}</p> -->
        <div class="lrc" ref="Lyric">
            <p class="lrc-p" :class="{'active':currentTime >= allKeys[index] && currentTime < allKeys[index+1]}" v-for="(value,key,index) in lyricContent" :key="index">
                {{ value }}{{ scrollLrc(index) }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Lyric",
    data(){
        return{
            lyricContent:{},
            allKeys:[]
        }
    },
    props:{
        songid:{
            type:[String,Number],
            default:""
        },
        currentTime:{
            type:[String,Number],
            default:""
        },
        duration:{
            type:[String,Number],
            default:""
        }
    },
    mounted(){
        this.$api.getLyric({
            method:"baidu.ting.song.lry",
            songid:this.songid
        })
        .then(res=>{
            this.lyricParse(res.data.lrcContent)
        })
    },
    methods:{
        lyricParse(data){
            var lyricObj = {}
            
            var lyrics = data.split("\n")
            
            for(let i=0; i<lyrics.length; i++){
                var reg =  /\[\d*:\d*((\.|\:)\d*)\]/g;
                var timeTegExArr = lyrics[i].match(reg)
                
                // 歌词对应的时间
                if(timeTegExArr){
                    var t = timeTegExArr[0]
                    var min = Number(String(t.match(/\[\d*/i)).slice(1))
                    var sec = Number(String(t.match(/\:\d*/i)).slice(1))
                    var time = min * 60 + sec
                }
                
                // 歌词
                var content = lyrics[i].replace(timeTegExArr,"")
                lyricObj[time] = content
            }
            this.lyricContent = lyricObj
            this.getAllKeys()
        },
        getAllKeys(){
            for(let i in this.lyricContent){
                this.allKeys.push(i)
            }
            console.log(this.allKeys)
        },
        // 歌词滚动
        scrollLrc(index){
            if(this.currentTime >= this.allKeys[index] && this.currentTime < this.allKeys[index+1]){
                this.$refs.Lyric.style.top = (-((index-2) * 30)) + "px";
            }
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}
</style>