<template>
  <div>
    <img :src="imageUrl" @click="refreshCode" style="width: 50px; heigth: 20px" />
  </div>
</template>

<script>
export default {
  name: "我的主页",
  data() {
    return {
      msg: "我的收藏",
      imageUrl:''
    };
  },
  methods: {
    refreshCode() {
      this.$rest.get("/api/imageCode").then((res)=>{
        this.imageUrl = res;
         console.log("这是图片信息:", res);
      });
    },
  },
  mounted() {
      this.refreshCode();
  },
};
</script>
