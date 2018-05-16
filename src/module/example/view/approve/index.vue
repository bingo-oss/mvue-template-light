<template>
  <div class="layout">
    <ul id="mvue-menu-row-flex" class="ivu-menu ivu-menu-light ivu-menu-horizontal">
      <li class="ivu-menu-item" :class="[(activekey == index) ? 'ivu-menu-item-active':'']" v-for="(item, index) in menuItem" :key="index" @click="goTo(index, item.name)">{{item.title}}</li>
    </ul>
    <div class="flex1 flex-column">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

export default {
  data: function () {
    return {
      menuItem: [
        {
          title: '发起审批',
          name: 'approve-initiate'
        },
        {
          title: '待我审批的',
          name: 'approve-waitting'
        },
        {
          title: '我已审批的',
          name: 'approve-done'
        },
        {
          title: '我发起的',
          name: 'approve-started'
        },
        {
          title: '抄送我的',
          name: 'approve-copy'
        }
      ],
      activekey: 0
    };
  },
  methods: {
    goTo (index, name){
      this.activekey = index;
      if(name == 'log-report') this.$router.push({name: 'log-report-table'});
      else this.$router.push({name : name});
    }

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
  #mvue-menu-row-flex.ivu-menu-light{
    display: flex;
    flex-direction: row;
    background: transparent;
  }
  #mvue-menu-row-flex .ivu-menu-item{
    text-align: center;
    flex: 1;
  }
  #mvue-menu-row-flex.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, #mvue-menu-row-flex.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    color: lightslategray;
  }
  #mvue-menu-row-flex.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, #mvue-menu-row-flex.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, #mvue-menu-row-flex.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, #mvue-menu-row-flex.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;
    font-weight: bold;
  }
</style>

