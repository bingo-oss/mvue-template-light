<template>
  <div class="layout">
    <router-view>
    </router-view>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";
  import menu from "../../menu/menu";

export default {
  data: function () {
    return {

    }
  },
  methods: {

  },
  mounted: function () {
    this.user = mvueCore.session.getCurrentUser();
    channelService.get({id:"005740cb-8d6e-4148-a71e-a436d9e2d6ce"}).then(function ({data}) {
      console.log(JSON.stringify(data));
      channelService.update({id:data.id},{title:data.title});
    })
  },
  components: {

  }
}
</script>
<style lang="scss">
  .layout{
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .flex1{
    flex: 1;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
  }
  .layout-header{
    border-bottom: 1px solid #dddee1;
    padding: 20px;
  }

  .layout-content{
    min-height: 200px;
    margin: 0px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .fs14{
    font-size: 14px;
  }

  .mt20{
    margin-top: 20px;
  }
  .mb20{ margin-bottom: 20px;}
  .m20{
    margin: 20px;
  }
  .ml15{
    margin-left: 15px;
  }
  .fs{
    font-size: 14px;
    color: #888888;
  }
  .width75{
    width: 75px;
  }
  .width200{
    width: 200px;
  }
  .overflow-y{
    overflow-y: auto;
  }
  .line-bottom{
    border-bottom: 1px solid #dddee1;
  }

  /*流水布局 元素默认宽度300*/
  .layout-flow-box li{
    border: 1px solid #dddee1;
    border-radius: 5px;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 300px;
    transition: background-color .2s linear,border .2s linear;
  }
  .layout-flow-box li:hover{
    border-color: lightblue;
  }
  /*图标圆圈*/
  .layout-c-title .circle{
    border-radius: 15px;
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #2d8cf0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin-right: 15px;
  }
  .clearfix:after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both
  }
  .clearfix {
    zoom: 1;
  }
</style>

