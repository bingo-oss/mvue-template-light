<template>
  <div class="layout-bg">
    <ul id="mvue-menu" class="ivu-menu ivu-menu-light ivu-menu-horizontal">
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
          title: '看日志',
          name: 'log-list'
        },
        {
          title: '写日志',
          name: 'log-add'
        },
        {
          title: '日志报表',
          name: 'log-report'
        },
        {
          title: '模版管理',
          name: 'log-module'
        },
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
  .layout-bg{
    background-color: #f5f7f9;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  #mvue-menu.ivu-menu-light{
    background: transparent;
  }
  #mvue-menu .ivu-menu-item{
    font-size: 12px;
  }
  #mvue-menu.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, #mvue-menu.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    color: lightslategray;
  }
  #mvue-menu.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, #mvue-menu.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, #mvue-menu.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, #mvue-menu.ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;
  }
</style>

