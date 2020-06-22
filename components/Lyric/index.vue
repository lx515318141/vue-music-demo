<template>
  <div class="lrcContainer">
    <!-- {{ duration }}-{{ currentTime }} -->
    <!-- <p v-if="currentTime >= allKeys[index] && currentTime < allKeys[index+1] " v-for="(value,key,index) in lyricContent" :key="index">{{ value }}</p> -->
    <div class="lrc" ref="Lyric">
      <p
        class="lrc-p"
        :class="{'active':currentTime >= allKeys[index] && currentTime < allKeys[index+1]}"
        v-for="(value,key,index) in lyricContent"
        :key="index"
      >{{ value }}{{ scrollLrc(index) }}</p>
    </div>
  </div>
</template>

<script>
// 歌词滚动功能
export default {
  name: "Lyric",
  data() {
    return {
      lyricContent: {},
      allKeys: []
    };
  },
  props: {
    songid: {
      type: [String, Number],
      default: ""
    },
    currentTime: {
      type: [String, Number],
      default: ""
    },
    duration: {
      type: [String, Number],
      default: ""
    }
  },
  mounted() {
    //   获取歌词
    this.$api
      .getLyric({
        method: "baidu.ting.song.lry",
        songid: this.songid
      })
      .then(res => {
        if (res.data.lrcContent) {
          this.lyricParse(res.data.lrcContent);
        } else {
          this.lyricContent["noLrc"] = "暂无歌词";
          console.log("1");
        }
        console.log(res.data);
      });
  },
  methods: {
    //   解析歌词
    lyricParse(data) {
      var lyricObj = {};
      var lyrics = data.split("\n");

      for (let i = 0; i < lyrics.length; i++) {
        var reg = /\[\d*:\d*((\.|\:)\d*)\]/g;
        var timeTegExArr = lyrics[i].match(reg);

        // 歌词对应的时间，先判断歌词是否存在这个时间格式，存在才执行
        if (timeTegExArr) {
          var t = timeTegExArr[0];
          var min = Number(String(t.match(/\[\d*/i)).slice(1));
          var sec = Number(String(t.match(/\:\d*/i)).slice(1));
          // 更加仔细，连毫秒都取出来，根据需求来选择使用哪种方法
          // var sec = parseFloat(String(t.match(/\:\d*((\.|\:)\d*)/i)).slice(1));
          var time = min * 60 + sec;
        }

        // 歌词
        // 将每行歌词中时间部分用空字符串替换，就得到了纯歌词
        var content = lyrics[i].replace(timeTegExArr, "");
        // 再以本句歌词时间作为key，歌词作为value存入对象中
        lyricObj[time] = content;
      }
      this.lyricContent = lyricObj;
      this.getAllKeys();
    },
    getAllKeys() {
      for (let i in this.lyricContent) {
        this.allKeys.push(i);
      }
    },
    // 歌词滚动
    scrollLrc(index) {
      if (
        this.currentTime >= this.allKeys[index] &&
        this.currentTime < this.allKeys[index + 1]
      ) {
        this.$refs.Lyric.style.top = -((index - 2) * 30) + "px";
      }
    }
  }
};
</script>

<style scoped>
.active {
  color: red;
}

.lrcContainer {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  overflow: scroll;
  position: relative;
  flex: 1;
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