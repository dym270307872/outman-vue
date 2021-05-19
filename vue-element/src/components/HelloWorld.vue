<template>
  <div >
    <h1>{{ msg }}</h1>
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
    mounted() {
  //  this.$axios.get("/api/data?key=12").then(res => {
        // console.log("这是登入信息:", res.data);
        this.$message.success('kasdhfkasdhjf');
    // });1
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