<template>
  <div class="layout">
    <router-view>
    </router-view>
  </div>
</template>
<script>

  export default {
    data: function () {
      return {

      }
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
  .fs{
    font-size: 14px;
    color: #888888;
  }
  .overflow-y{
    overflow-y: auto;
  }

  /*流水布局 元素默认宽度300*/
  .layout-flow-box li{
    width: 300px;
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

