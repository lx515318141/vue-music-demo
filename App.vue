<template>
  <div id="app">
    <keep-alive exclude="Player">
        <router-view/>
    </keep-alive>
    
    <BackTop />
  </div>
</template>

<script>
import BackTop from "./components/BackTop"
export default {
  name: 'App',
  components:{
      BackTop
  }
  
}
</script>

<style>
*{margin: 0; padding: 0;}
*{
  user-select: none;
  font-family: "微软雅黑";
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-text-size-adjust: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
ul,ol,li{list-style: none;}
body{
  margin: 0 auto;
  max-width: 750px;
  min-width: 320px;
  background-color: #f1f1f1;
  color: #555;
  height: 100%;
}
a{
  text-decoration: none;
  color: #555;
  -webkit-touch-callout: none;
  outline: 0;
  cursor: pointer;
}
img {
    border: none;
    max-width: 100%;
    vertical-align: middle;
}
body,
p,
form,
input,
button,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
}
input,
textarea {
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text;
    -webkit-appearance: none;
    font-size: 1em;
    line-height: 1.5em;
}
table {
    border-collapse: collapse;
}
input,
select,
textarea {
    outline: none;
    border: none;
    background: none;
}
a:link,
a:active {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
}
em,
i {
    font-style: normal;
}
li,
ol {
    list-style: none;
}
html {
    font-size: 16px;
}
.clear {
    clear: both;
    height: 0;
    font-size: 0;
    line-height: 0;
    visibility: hidden;
    overflow: hidden;
}
.fl {
    float: left;
}
.fr {
    float: right;
}

.clearfix {
    overflow: hidden;
    clear: both;
}

.clearfix:before {
    content: " ";
    display: table;
}
</style>
