<template>
  <div>
    <div>aaa:{{aaa}}</div>
    <div>bbb:{{bbb}}</div>
    <div>ccc:{{ccc}}</div>
    <div>ddd:{{ddd}}</div>
  </div>
</template>

<script>
    export default {
        name: "DShow",
      data(){
          return{
            aaa:'aaa',
            bbb:{name:'name1',value:'value1'},
            ccc:[{name:'name1',value:'value1'},{name:'name2',value:'value2'}],
            ddd:['value1','value2','value3']
          }
      }
    }
</script>

<style scoped>

</style>
