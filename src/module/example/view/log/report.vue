<template>
  <div class="m20 flex-column flex1 report">
    <i-form class="mt20" ref="formCustom" :model="formCustom" label-position="left" :label-width="60">
      <Form-item :label="'发送人'" prop="input1">
        <Row>
          <i-col span="18">
            <i-input type="text" v-model="formCustom.input1" :autosize="{minRows: 2,maxRows: 5}" placeholder="点击选择发送人"></i-input>
          </i-col>
          <i-col span="5" offset="1">
            <i-button type="primary" @click="handleSubmit('formCustom')">搜索</i-button>
          </i-col>
        </Row>
      </Form-item>
      <Form-item :label="'时间'" prop="input2">
        <Row>
          <i-col span="8">
            <Date-picker type="date" placeholder="选择日期" style="width: 258px" v-model="formCustom.datestart"></Date-picker>
          </i-col>
          <i-col span="2" offset="2">
            <div class="line"></div>
          </i-col>
          <i-col span="8" offset="1">
            <Date-picker type="date" placeholder="选择日期" style="width: 258px" v-model="formCustom.dateend"></Date-picker>
          </i-col>
        </Row>

      </Form-item>
    </i-form>
    <div class="layout-header flex-column flex1">
      <div>选择模版 <span class="gray">(当前模版为： {{moduleTitle}})</span></div>
      <Tabs class="flex-column flex1 mt20" active-key="key1" type="card" @on-click="tagClickFn">
        <Tab-pane v-for="(item, index) in tabItem" :label="item.title" :key="index">
          <div class="layout-scroll">
            <div class="">
              <router-view></router-view>
            </div>
          </div>
        </Tab-pane>
      </Tabs>
    </div>
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
          datestart: '',
          dateend: '',
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
  .report .layout-header{
    padding: 0px;
  }
  .line{
    height: 5px;
    background-color: lightgray;
    margin-top: 15px;
  }
</style>

