<template>
  <Row :gutter="16">
    <Col span="6">
      <div>col-6</div>
    </Col>
    <Col span="6">
      <div>col-6</div>
    </Col>
    <Col span="6">
      <div>col-6</div>
    </Col>
    <Col span="6">
      <div>col-6</div>
    </Col>
  </Row>
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

  .hello .head a {
    margin: 2px 10px;
    text-decoration: underline;
    color: black;
    cursor: pointer;
  }

  .hello .head a:hover {
    color: blue;
  }

  .hello .search-div {
    text-align: center;
    height: 190px;
    width: 50%;
    margin: 0 auto;
  }

  .hello .search-div .image {
    text-align: center;
    width: 300px;
    height: 100px;
  }

  .hello .search-div .search-input {

  }

  .hello .search-div .search-text {
    width: 70%;
    height: 35px;
    line-height: 35px;
    border: 1px solid gray;
    text-indent: 1em;
    float: left;
  }

  .hello .search-div .search-text:focus {
    border-color: royalblue;
  }


  .hello .search-div input.search-button {
    width: 120px;
    height: 39px;
    line-height: 39px;
    background-color: royalblue;
    border: 1px solid royalblue;
    cursor: pointer;
    color: white;
    float: left;
  }

  .hello .maindiv {
    margin: 0px;
  }

  .hello .maindiv div {
    line-height: 35px;
    text-align: left;
    background-color: #00C1DE;
    clear: both
  }

  .hello .maindiv div span {
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

  .hello .maindiv div setting {
    display: inline-block;
    float: right;
    margin-top: 1px;
    width: 33px;
    height: 33px;
    background-position: -169px -3787px;
    background-image: url('https://gss2.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/her/static/indexnew/pkg/aio-all_z.b92d401.png')
  }

  .hello .maindiv ul {
    border: 1px solid gray;
    padding: 10px;
  }

  .hello .maindiv ul li {
    width: 200px;
    line-height: 30px;
    border: 1px solid gray;
    margin: 0 10px 10px 0px;
  }
</style>
