<template>
  <div class="layout mt20">
    <Row type="flex" justify="center">
      <Col span="21">
        <i-button  v-if="show" type="primary" size="large" icon="plus-round" @click="addMoudle()">
          <span>推荐模版</span>
        </i-button>
        <i-form class="mt20" ref="formCustom" :model="formCustom" :rules="ruleCustom" label-position="top">
          <Form-item label="标题" prop="title">
            <i-input type="text" v-model="formCustom.title"></i-input>
          </Form-item>
          <Form-item label="正文" prop="content">
            <i-input v-model="formCustom.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
          </Form-item>
          <Form-item label="选择分类">
            <i-select v-model="formCustom.select" placeholder="请选择" @on-change="selectFn">
              <i-option v-for="(item, index) in clasData" :value="item.clasId" :key="index">{{ item.name }}</i-option>
            </i-select>
          </Form-item>
          <Form-item label="作者">
            <i-input v-model="formCustom.name" type="text"></i-input>
          </Form-item>
          <Form-item>
            <i-button type="primary" @click="handleSubmit('formCustom')">发送</i-button>
            <i-button type="ghost" @click="handleView('formCustom')" style="margin-left: 8px">预览</i-button>
          </Form-item>
        </i-form>
      </Col>
    </Row>

  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

export default {
  data: function () {

    return {
      formCustom: {
        title: '',
        name: '',
        content: '',
        select: ''
      },
      ruleCustom: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        // name: [
        //   { required: true, message: '请输入作者', trigger: 'blur' }
        // ],
        content: [
          { required: true, message: '请输入正文', trigger: 'blur' }
        ]
      },
      dataModel: {
        name: '李悦青',
        title: '欢迎加入',
        static: '共1人',
        updateAt: '2018-05-08 14：54',
        content: '欢迎加入模版'
      },
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
      clasData: [
        {
          clasId: 'all',
          name: '所有'
        }
      ],
      show: false
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push({path: '/notice/clas/all/list'});
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    },
    handleView (name) {
      this.$refs[name].validate((valid) => {
        if(valid){
          this.$Modal.info({
            title: `${this.formCustom.title}`,
            content: `作者：${this.formCustom.name}<br>${this.formCustom.content}`
          })
        } else {
          this.$Message.error('表单验证失败!');
        }
      })
    },
    addMoudle (){
      this.formCustom = this.dataModel;
    },
    selectFn (){}
  },
  mounted: function () {
    const url = this.$route;
    if(url.params.id){
      const id = url.params.id;
      this.formCustom = this.data[id];
    }
    if(url.query.params){
      if(url.query.params == 'new'){
        this.show = true;
        return
      }
      this.show = false;
    }

  },
  components: {

  }
}
</script>
<style lang="scss">
</style>

