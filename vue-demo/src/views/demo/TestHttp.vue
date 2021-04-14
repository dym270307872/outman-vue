<template>
  <div>

    name:<input type="text" name="name" v-model="param.name" />
    <br/>
    value:<input type="text" name="value" v-model="param.value" />

    <br/>

    <button @click="httpget">get请求</button>
    <button @click="httppostraw">post请求raw</button>
    <button @click="httppostraw2">post请求raw2</button>
    <button @click="httppost">post请求</button>
    <br/>

    <textarea v-model="result"></textarea>
  </div>
</template>

<script>
  import http from '../../assets/common/js/http.js'
  export default {
    data() {
      return {
        param: {
          name: 'adfa',
          value: 12
        },
        result: 'asdas'
      }
    },
    methods: {
      httpget() {
        // alert('get开始');
        // JSON.stringify(this.param);

        http.get('/testGet', this.param, this).then((res) => {
          this.result = res;
        });
        return;
      },
      httppost() {
        // alert('post开始')
        http.send('/testPost', {
          method: 'post',
          contentType: 'application/x-www-form-urlencoded',
          showLog: true
        }, this.param, this).then((res) => {
          this.result = res;
        });
      },
      httppostraw() {
        // alert('post开始')
        http.post('/testPostRaw', this.param, this).then((res) => {
          this.result = res;
        });
      },
      httppostraw2() {
        // alert('post开始')
        http.post('/testPostRaw2', this.param, this).then((res) => {
          this.result = res;
        });
      },
    }
  }
</script>

<style>
</style>
