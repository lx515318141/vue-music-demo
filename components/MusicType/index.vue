<template>
  <div>
    <div class="MusicType-wrapper">
      <router-link :to="{name:'More', params:{type: item.typ}}">
        <img :src="item.imgSrc" alt="图片载入失败" />
        <p>{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicType",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.MusicType-wrapper {
  margin: 10px;
}
p {
  color: white;
  font-size: 26px;
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 69px);
  line-height: 26px;
  letter-spacing: 30px;
}
img{
  border-radius: 10px;
}
a {
  position: relative;
}
</style>