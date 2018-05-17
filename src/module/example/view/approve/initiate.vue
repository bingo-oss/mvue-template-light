<template>
  <div class="layout-header overflow-y flex1">
    <i-input icon="ios-search" placeholder="请搜索要发起的审批单" v-model="searchText" style="width: 300px"></i-input>
    <Collapse id="mvue-collapse" class="mt20" active-key="1">
      <Panel :key="index" v-for="(item, index) in menuItem">
        {{item.title}}<span class="gray" v-if="item.lists">({{item.lists.length}})</span>
        <div slot="content">
          <ul class="layout-flow-box special-width clearfix">
            <li class="flex-row" :key="indexs" v-for="(items, indexs) in item.lists">
              <Icon class="circle" :type="items.icon"></Icon>
              <h5>{{items.name}}</h5>
            </li>
          </ul>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

export default {
  data: function () {
    return {
      searchText: '',
      menuItem: [
        {
          title: '出勤休假',
          lists: [
            {
              icon: 'clock',
              name: '请假'
            },
            {
              icon: 'plane',
              name: '出差'
            },
            {
              icon: 'clock',
              name: '外出'
            },
            {
              icon: 'clock',
              name: '加班'
            },
            {
              icon: 'clock',
              name: '补卡申请'
            },
          ]
        },
        {
          title: '人事',
          lists: [
            {
              icon: 'clock',
              name: '转正'
            },
            {
              icon: 'plane',
              name: '招聘'
            },
            {
              icon: 'clock',
              name: '离职'
            }
          ]
        },
        {
          title: '财务',
          lists: [
            {
              icon: 'clock',
              name: '报销'
            },
            {
              icon: 'plane',
              name: '备用金申请'
            },
            {
              icon: 'clock',
              name: '付款申请'
            }
          ]
        },
        {
          title: '行政',
          lists: [
            {
              icon: 'clock',
              name: '用车申请'
            },
            {
              icon: 'plane',
              name: '物品领用'
            },
            {
              icon: 'clock',
              name: '用印申请'
            },
            {
              icon: 'clock',
              name: '通用审批'
            }
          ]
        },
      ]
    };
  },
  methods: {

  },
  computed: {
  },
  mounted: function () {
    // this.btn();

  },
  watch: {
    '$route' (to, from){
      // this.btn();
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

