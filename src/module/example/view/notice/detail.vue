<template>
  <div class="layout">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="20">
        <h3>{{dataNew.title}}</h3>
        <div class="mt20">
          <span class="fs">{{dataNew.name}}</span>
          <span class="fs">{{dataNew.updateAt}}</span>
        </div>
        <div class="mt20">{{dataNew.content}}</div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

export default {
  data: function () {
    return {
      data: [
        {
          name: '李悦青',
          title: '欢迎加入',
          static: '共1人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入'
        },
        {
          name: '李悦青1',
          title: 'Jim Green',
          static: '共0人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入2'
        },
        {
          name: '李悦青2',
          title: 'Joe Black',
          static: '共0人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入3'
        },
        {
          name: '李悦青3',
          title: 'Jon Snow',
          static: '共0人',
          updateAt: '2018-05-08 14：54',
          content: '欢迎加入4'
        }
      ],
      dataNew: ''
    };
  },
  methods: {

  },
  mounted: function () {
    const id = this.$route.params.id;
    this.dataNew = this.data[id]
  },
  components: {

  }
}
</script>
<style lang="scss">

</style>

