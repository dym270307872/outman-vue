<template>
  <div>
    <Menu :mode="modeType" theme="dark" width="auto" :active-name="this.$route.path" :open-names="openNames" @on-select="menuSelect" accordion>
      <div class="layout-logo-left">
        <Icon type="paper-airplane" :size="logoSize" v-show="true"></Icon>
        <span class="layout-text"> Admin 管理系统</span>
      </div>
      <template v-for="(item,index) in $router.options.routes" >
        <Submenu :name="item.name" v-bind:key="index">
          <template slot="title">
            <Icon :type="item.iconCls" :size="iconSize"></Icon>
            <span class="layout-text" >{{item.name}}</span>
          </template>
          <template v-for="(child,childIndex) in item.children" v-if="!child.hidden">
            <Menu-item :name="child.path"  v-bind:key="childIndex">{{child.name}}</Menu-item>
          </template>
        </Submenu>
       <!-- <template  v-if="item.leaf&&item.children.length>0">
          <Menu-item :name="item.children[0].path">
            <Icon :type="item.iconCls" :size="iconSize"></Icon>
            <span class="layout-text" >{{item.children[0].name}}</span>
          </Menu-item>
        </template>-->
      </template>

    </Menu>
  </div>
</template>

<script>
    export default {
        name: "MyMenu",
      data(){
        return {
          menuList: [{ "path": "/", "name": "组织架构", "redirect": "/index" ,"children":[{ "path": "/1", "name": "用户管理", "redirect": "/index" },{ "path": "/2", "name": "角色管理", "redirect": "/index" },{ "path": "/3", "name": "权限管理", "redirect": "/index" }]},{ "path": "/4", "name": "系统管理", "redirect": "/index" ,"children":[{ "path": "/5", "name": "日志管理", "redirect": "/index" },{ "path": "/6", "name": "备份管理", "redirect": "/index" },{ "path": "/7", "name": "主页管理", "redirect": "/index" },{ "path": "/8", "name": "设置管理", "redirect": "/index" }]}]

        }
      }
    }
</script>

<style scoped>

</style>
