<template>
    <div>
        <p v-for="(item,index) in lyricContent" :key="index">{{ item }}</p>
    </div>
</template>

<script>
export default {
    name:"Lyric",
    data(){
        return{
            lyricContent:[]
        }
    },
    props:{
        songid:{
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
            console.log(res.data)
            this.lyricParse(res.data.lrcContent)
        })
    },
    methods:{
        lyricParse(data){
            var lyricObj = []
            console.log(data)
            var lyrics = data.split("\n")
            
            for(let i=0; i<lyrics.length; i++){
                var reg =  /\[\d*:\d*((\.|\:)\d*)\]/g;
                var timeTegExArr = lyrics[i].match(reg)
                var content = lyrics[i].replace(timeTegExArr,"")
                lyricObj.push(content)
            }
            this.lyricContent = lyricObj
        }
    }
}
</script>

<style scoped>

</style>