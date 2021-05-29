<template>
  <div >
    <h1>{{ msg }}</h1>
    <button @click="loading">加载</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
    msg: "HelloWorld"

    }
  },
  methods:{
    loading(){

    
    const loading = 
    this.$loading({
          // lock: true,
          text: '努力加载中',
          // spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
        }
  },
    mounted() {
   this.$rest.get("/api/data?key=12").then(res => {
        console.log("这是登入信息:", res);
        this.$message.success('kasdhfkasdhjf');
    });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>