<template>
  <div>

    name:<input type="text" name="name" v-model="param.name" />
    </br>
    value:<input type="text" name="value" v-model="param.value" />

    </br>

    <button @click="httpget">get请求</button>
    <button @click="httppost">post请求</button>

    <button @click="httpCorsGet">get跨域请求</button>
    <button @click="httpCorsPost">post跨域请求</button>
    </br>

    <textarea>{{result}}</textarea>
     <textarea>{{sessionStatus}}</textarea>
  </div>
</template>

<script>
  import http from '../../common/http.js'
  export default {
    data() {
      return {
        param: {
          name: 'adfa',
          value: 12
        },
        result: 'asdas',
        sessionStatus:''
      }
    },
    methods: {
      httpget() {
        http.get('/testGet', this.param, this).then((res) => {
          this.result = res;
        });
        return;
      },
      httppost() {
        http.send('/testPost', {
          method: 'post',
          contentType: 'application/x-www-form-urlencoded',
          showLog: true
        }, this.param, this).then((res) => {
          this.result = res;
        });
      },
      httpCorsGet() {
        http.get('http://127.0.0.1:14040/demo/testGet', this.param, this).then((res) => {
          this.result = res;
        });
      },
      httpCorsPost() {
        http.post('http://127.0.0.1:14040/demo/testPost', this.param, this).then((res) => {
          this.result = res;
        });
      },
    }
  }
</script>

<style>
</style>
