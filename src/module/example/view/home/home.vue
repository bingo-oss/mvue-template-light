<template>
  <div class="layout flex-column flex1">
    <router-view>
    </router-view>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

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
  @import "~style/sass/app_template_common.scss";
</style>

