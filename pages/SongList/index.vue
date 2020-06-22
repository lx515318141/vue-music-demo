<template>
    <div>
        <Nav />
        SongList
    </div>
</template>
<script>
import Nav from "../../components/Nav"
export default {
    name:"SongList",
    components:{
    Nav
  },
  mounted() {
      console.log(132);
  }
}
</script>

<style scoped>

</style>