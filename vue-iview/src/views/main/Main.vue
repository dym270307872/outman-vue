<template>
  <div>
    <Layout>
      <Header>
        头部
      </Header>
<Layout>
  <Sider hide-trigger :style="{background: '#fff'}">

  </Sider>
  <Layout :style="{padding: '0 24px 24px'}">
    <Breadcrumb :style="{margin: '24px 0'}">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
      Content
    </Content>
  </Layout>
</Layout>
<Footer>脚步</Footer>
    </Layout>

  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
    },
    methods: {},
    mounted: function () {
      alert("我进来了！");
    }

  }

</script>

