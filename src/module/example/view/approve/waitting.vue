<template>
  <div class="mt20 flex-column flex1">
    <Row>
      <Col span="23" offset="1">
        <i-input icon="ios-search" placeholder="请输入搜索关键字，包括审批标题、编号、正文内容、审批意见" style="width: 450px"></i-input>
        <i-button class="ml15" v-if="!searchGroupShow" type="primary">搜索</i-button>
        <a class="ml15" @click="searchGroup" href="javascript:void(0)">{{searchGroupText}}</a>
        <i-form v-if="searchGroupShow" class="mt20 line-bottom" ref="formCustom" :model="formCustom" label-position="left" :label-width="98">
          <Form-item label="提交审批时间:" prop="time">
            <Date-picker type="date" placeholder="选择日期" v-model="formCustom.time"></Date-picker> ~ <Date-picker type="date" placeholder="选择日期" v-model="formCustom.time"></Date-picker>
          </Form-item>
          <Form-item label="完成审批时间:" prop="time">
            <Date-picker type="date" placeholder="选择日期" v-model="formCustom.time"></Date-picker> ~ <Date-picker type="date" placeholder="选择日期" v-model="formCustom.time"></Date-picker>
          </Form-item>
          <Form-item label="审批单发起人:" prop="name">
            <i-input v-model="formCustom.name" placeholder="点击选择人" type="text" style="width: 353px"></i-input>
          </Form-item>
          <Form-item>
            <i-button type="primary">搜索</i-button>
            <a class="ml15" href="javascript:void(0)">清空搜索条件</a>
          </Form-item>
        </i-form>
        <div class="mvue-form-bottom mt20">
          <div class="ivu-form-item">
            <label class="ivu-form-item-label width75">审批类型</label>
            <i-select :model.sync="model4" class="width200">
              <i-option v-for="(item, index) in styleList" :key="index" :value="item.value">{{ item.label }}</i-option>
            </i-select>
            <Button-group v-if="btnGroup">
              <i-button type="primary">全部</i-button>
              <i-button type="ghost">审批完成</i-button>
              <i-button type="ghost">审批中</i-button>
              <i-button type="ghost">已撤消</i-button>
            </Button-group>
            <Checkbox v-if="selectBox" class="ml15">仅未读</Checkbox>
            <a v-if="selectBox" class="gray" href="javascript:void(0)">全部标记为已读</a>
          </div>
        </div>
      </Col>
    </Row>

    <div class="nodatas flex-column flex1" v-if="dataNew.length === 0">
      <img :src="imgurl">
      <h5>暂无相关审批</h5>
    </div>
    <Table v-if="dataNew.length != 0" ref="table" :columns="columns" :data="dataNew" @on-row-click="onRowClick"></Table>
  </div>

</template>
<script>
  import  channelService from "src/services/example/channel_service";

export default {
  data: function () {
    return {
      searchGroupShow: false,
      searchGroupText: '高级搜索',
      model4: '',
      styleList: [
        {
          label: '请假',
          value: 'qingjia'
        },
        {
          label: '出差',
          value: 'chuchai'
        },
        {
          label: '外出',
          value: 'waichu'
        }
      ],
      columns: [
        {
          title: '审批标题',
          width: 180,
          key: 'title',
          render: (h, params) => {
            return h('div', {
              class: 'flex-row'
            },[
              h('span', {
                class: 'circle'
              }, params.row.name),
              h('h6', {
              }, params.row.title)

            ]);
          }
        },
        {
          title: '审批摘要',
          width: 280,
          key: 'updateAt',
          render: (h, params) => {
            return h('div', {
              style: {
                padding: '20px'
              }
            }, [
              h('p', '请假类型：'+ params.row.type),
              h('p', '开始时间：'+ params.row.start),
              h('p', '结束时间：'+ params.row.end),
            ]);
          }
        },
        {
          title: '发起时间',
          key: 'updateAt'
        },
        {
          title: '完成时间',
          key: 'finishAt',
          align: 'center',
        },
        {
          title: '状态',
          key: 'status',
          align: 'center'
        }
      ],
      data: [
        {
          name: '李悦青',
          title: '请假单(示例)',
          type: '事假',
          start: '2018-05-08 14：54',
          end: '2018-05-08 14：54',
          status: '审批中',
          updateAt: '2018-05-08 14：54',
          finishAt: '2018-05-08 14：54'
        }
      ],
      dataNew: [],
      formCustom: {
        title: '',
        name: '',
        content: '',
        select: '',
        time: ''
      },
      btnGroup: false,
      selectBox: false,
      imgurl: require('../../../../images/nodata.jpeg'),
    };
  },
  methods: {
    routeFn (){
      const name = this.$route.name;
      switch(name)
      {
        case 'approve-waitting':
          this.btnGroup = false;
          this.selectBox = false;
          break;
        case 'approve-done':
          this.btnGroup = true;
          this.selectBox = false;
          break;
        case 'approve-started':
          this.btnGroup = true;
          this.selectBox = false;
          break;
        case 'approve-copy':
          this.btnGroup = false;
          this.selectBox = true;
          break;
        default:
          console.log(33);
      }
    },
    getData (){
      const name = this.$route.name;
      switch(name)
      {
        case 'approve-waitting':
          this.dataNew =  this.data;
          break;
        case 'approve-done':
          this.dataNew =  [];
          break;
        case 'approve-started':
          this.dataNew =  this.data;
          break;
        case 'approve-copy':
          this.dataNew =  [];
          break;
        default:
          console.log(33);
      }
    },
    searchGroup (){
      this.searchGroupShow = !this.searchGroupShow;
      if(this.searchGroupShow) this.searchGroupText = '关闭高级搜索';
      else this.searchGroupText = '高级搜索';
    },
    onRowClick(row){
      console.log(row);
    }
  },
  computed: {
  },
  mounted: function () {
    this.routeFn();
    this.getData();


  },
  watch: {
    '$route' (to, from){
      this.routeFn();
      this.getData();
    }
  },
  components: {

  }
}
</script>
<style lang="scss">
  #mvue-collapse.ivu-collapse{
    background: transparent;
    border: none;
  }
  #mvue-collapse.ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
    padding: 0px;
    color: #3a3e4e;
    height: 50px;
    line-height: 50px;
  }
  #mvue-collapse .ivu-icon-arrow-right-b:before{
    color: lightgray;
  }
  #mvue-collapse .ivu-collapse-content{
    padding: 0px;
  }

  .special-width li{
    width: 200px;
    align-items: center;
    padding: 15px;
    margin-left: 0;
    margin-right: 15px;
    cursor: pointer;
    background: #ffffff;
  }
  .special-width li:hover{
    background: ghostwhite;
  }
  .special-width .circle{
    border-radius: 5px;
  }
</style>

