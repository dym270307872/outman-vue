<template>
  <div >
<!--    <div class="head"><a>新闻</a><a>hao123</a><a>地图</a><a>视频</a><a>贴吧</a><a>学术</a><a>登录</a><a>设置</a></div>-->
   hehehe
  </div>
</template>

<script>
  export default {
    name: '我的主页',
    data() {
      return {
        msg: '我的收藏'
      }
    },
    
    mounted() {
   this.$axios.get("/api/data?key=12").then(res => {
        console.log("这是登入信息:", res.data);
    });
}
  }
</script>
