<template>
  <div class="hello">
<!--    <div class="head"><a>新闻</a><a>hao123</a><a>地图</a><a>视频</a><a>贴吧</a><a>学术</a><a>登录</a><a>设置</a></div>-->
    <div class="search-div">
      <img src="https://www.baidu.com/img/dong_a16028f60eed614e4fa191786f32f417.gif"
           class="image"/>
      <div class="search-input"><input type="text" class="search-text"/><input type="button"  class="search-button" value="百度一下"/></div>
    </div>
    <div class="maindiv">
      <div><icon></icon><span>{{ msg }}-我的网站</span><setting></setting></div>
      <ul>
        <li>
          <a href="http://10.110.120.70:8430" target="_blank">
            gitlib
          </a>
        </li>
        <li>
          <a href="http://10.110.120.70:8020" target="_blank">
            Nexus
          </a>
        </li>
        <li>
          <a href="https://10.110.120.70:8443" target="_blank">
            Svn
          </a>
        </li>
        <li>
          <a href="http://localhost:8010" target="_blank">
            Jenkins
          </a>
        </li>
        <li>
          <a href="http://localhost:8050" target="_blank">
            Tomcat
          </a>
        </li>
        <li>
          <a href="http://localhost:8060" target="_blank">
            Serv-U
          </a>
        </li><li>
        <a href="http://10.110.120.70:8430" target="_blank">
          gitlib
        </a>
      </li>
        <li>
          <a href="http://10.110.120.70:8020" target="_blank">
            Nexus
          </a>
        </li>
        <li>
          <a href="https://10.110.120.70:8443" target="_blank">
            Svn
          </a>
        </li>
        <li>
          <a href="http://localhost:8010" target="_blank">
            Jenkins
          </a>
        </li>
        <li>
          <a href="http://localhost:8050" target="_blank">
            Tomcat
          </a>
        </li>
        <li>
          <a href="http://localhost:8060" target="_blank">
            Serv-U
          </a>
        </li>
      </ul>
      <div><icon></icon><span>Essential Links</span><setting></setting></div>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">
            Core Docs
          </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">
            Forum
          </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">
            Community Chat
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
            Docs for This Template
          </a>
        </li>
      </ul>
      <div><icon></icon><span>Ecosystem</span><setting></setting></div>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">
            vue-router
          </a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">
            vuex
          </a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">
            vue-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: '我的主页',
    data() {
      return {
        msg: '我的收藏'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
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

  .hello {
    width: 80%;
    margin: 0 auto;
  }

  .hello .head {
    text-align: right;
    padding: 20px;
  }

  .hello .head a{
    margin: 2px 10px;
    text-decoration: underline;
    color: black;
    cursor: pointer;
  }

  .hello .head a:hover{color: blue;}

  .hello .search-div {
    text-align: center;
    height: 190px;
    width:50%;
    margin: 0 auto;
  }

  .hello .search-div .image {
    text-align: center;
    width: 300px;
    height: 100px;
  }

  .hello .search-div .search-input{

  }

  .hello .search-div .search-text {
    width:70%;
    height: 35px;
    line-height: 35px;
    border: 1px solid gray;
    text-indent: 1em;
    float: left;
  }

  .hello .search-div .search-text:focus{
    border-color: royalblue;
  }


  .hello .search-div input.search-button{
    width:120px;
    height: 39px;
    line-height: 39px;
    background-color: royalblue;
    border: 1px solid royalblue;
    cursor: pointer;
    color:white;
    float: left;
  }

  .hello .maindiv {
    margin: 0px;
  }

  .hello .maindiv div {
    line-height: 35px;
    text-align: left;
    background-color: #00C1DE;
    clear:both
  }
  .hello .maindiv div span{
    display: inline-block;
    left: 10px;
    right: 50px;
    text-indent: 15px;
  }

  .hello .maindiv div icon {
    position: relative;
    display: inline-block;
    left: 10px;
    top: 4px;
    width: 20px;
    height: 20px;
    background-image: url('https://www.w3school.com.cn/ui2017/alert.png');
  }
  .hello .maindiv div setting{
    display: inline-block;float: right;
    margin-top: 1px;
    width:33px;height: 33px;
    background-position: -169px -3787px;
    background-image: url('https://gss2.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/her/static/indexnew/pkg/aio-all_z.b92d401.png')}

  .hello .maindiv ul {
    border: 1px solid gray;
    padding: 10px;
  }
  .hello .maindiv ul li{
    width: 200px;
    line-height:30px;
    border: 1px solid gray;
    margin: 0 10px 10px 0px;
  }
</style>
