<template>
  <div>
    <button @click="encrypt">加密</button>
    <button @click="decrypt">解密</button>
    <br/>
    原始明文：
    <textarea style="width: 100%;height: 150px;" v-model="text"></textarea>
    秘钥：
    <textarea style="width: 100%;height: 30px;" v-model="key"></textarea>
    本地密文
    <textarea style="width: 100%;height: 150px;" v-model="result1"></textarea>
    远程密文
    <textarea style="width: 100%;height: 150px;" v-model="result2"></textarea>
    本地明文
    <textarea style="width: 100%;height: 150px;" v-model="text1"></textarea>
    远程明文
    <textarea style="width: 100%;height: 150px;" v-model="text2"></textarea>

  </div>
</template>

<script>
import http from '../../assets/common/js/http.js'
import aesUtil from '../../assets/common/js/aesUtil'
  export default {
    data() {
      return {
        text: '',
        key:'1234567812345678',
        text1:'',
        text2:'',
        result1: '',
        result2: ''
      }
    },
    methods: {
      encrypt() {
        this.result1 = aesUtil.Encrypt(this.text,this.key);
        let param = {text:this.text,key:this.key};
        http.send("http://localhost:7001/aes/encrypt",{
          method: 'post',
          contentType: 'application/x-www-form-urlencoded',
          showLog: true
        },param, this).then((res) => {
          this.result2 = res;
        });
        return;
      },
      decrypt() {
        this.text1 = aesUtil.Decrypt(this.result2,this.key);
        let param = {text:this.result1,key:this.key};
        http.send("http://localhost:7001/aes/decrypt",{
          method: 'post',
          contentType: 'application/x-www-form-urlencoded',
          showLog: true
        },param, this).then((res) => {
          this.text2 = JSON.stringify(res);
        });
        return;
      }
    }
  }
</script>

<style>
</style>
