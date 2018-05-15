<template>
  <div class="m20 flex-column flex1 po-r">
    <div>选择模版 <span class="gray">(当前模版为： {{moduleTitle}})</span></div>
    <Tabs class="flex-column flex1 mt20" active-key="key1" type="card" @on-click="tagClickFn">
      <Tab-pane v-for="(item, index) in tabItem" :label="item.title" :key="index">
        <div class="layout-scroll">
          <div class="">
            <i-form class="mt20" ref="formCustom" :model="formCustom" label-position="top">
              <Form-item :label="item.label+'完成工作'" prop="input1">
                <i-input type="textarea" v-model="formCustom.input1" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
              </Form-item>
              <Form-item :label="'未完成工作'" prop="input2">
                <i-input type="textarea" v-model="formCustom.input2" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
              </Form-item>
              <Form-item :label="'需协调工作'" prop="input3">
                <i-input type="textarea" v-model="formCustom.input3" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
              </Form-item>
              <Form-item :label="'备注'" prop="input4">
                <i-input type="textarea" v-model="formCustom.input4" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
              </Form-item>
              <Form-item :label="'添加照片'">
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                  <Icon size="50" type="image"></Icon>
                </Upload>
              </Form-item>
              <Form-item>
                <i-button type="primary" @click="handleSubmit('formCustom')" long size="large">提交</i-button>
              </Form-item>
            </i-form>
          </div>
        </div>
      </Tab-pane>
    </Tabs>

  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

  export default {
    data: function () {
      return {
        tabItem: [
          {
            title: '日报',
            label: '今日'
          },
          {
            title: '周报',
            label: '本周'
          },
          {
            title: '月报',
            label: '本月'
          }
        ],
        formCustom: {
          input1: '',
          input2: '',
          input3: '',
          input4: ''
        },
        moduleTitle: '日报'
      };
    },
    methods: {
      tagClickFn (index){
        this.moduleTitle = this.tabItem[index].title
      },
      handleSubmit (name) {
        // this.$router.push({path: '/log/list'});
        this.$Message.success('提交成功');
      }
    },
    mounted: function () {
      console.log('clas mounted');

    },
    watch: {
      '$route' (to, from){
        console.log(this.$route);
      }
    },
    components: {

    }
  }
</script>
<style lang="scss">

</style>

