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
    display: flex;
    flex-direction: column;
  }

  .layout-content{
    min-height: 200px;
  }
</style>

