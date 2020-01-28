<template>
  <div>
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
  </div>
</template>

<script>
    export default {
        name: "DGrid"
    }
</script>

<style scoped>

</style>
