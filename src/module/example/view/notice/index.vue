<template>
  <div class="layout mt20">
    <div class="layout-header">
      <Row type="flex" justify="center" class="code-row-bg">
        <i-col :xs="{ span: 3, offset: 1 }"><i-button size="large" type="ghost" @click="goBack()">返回</i-button></i-col>
        <i-col :xs="{ span: 11, offset: 1 }"><h4 class="textalignC">{{title}}</h4></i-col>
        <i-col :xs="{ span: 3, offset: 1 }"><i-button size="large" type="ghost" @click="add('new')" v-if="addNoticeMoudle">新员工欢迎公告</i-button></i-col>
        <i-col :xs="{ span: 3, offset: 1 }"><i-button size="large" type="primary" @click="add" v-if="addNotice">发公告</i-button></i-col>
      </Row>
    </div>
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      title: '',
      addNoticeMoudle: false,
      addNotice: false,
    };
  },
  methods: {
    goBack (){
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/');
    },
    add (params) {
      this.$router.push({path: '/notice/add', query: {params}});
    },
    btn (){
      const url = this.$route;
      if(url.name == 'notice-list'){
        this.addNoticeMoudle = true;
        this.addNotice = true;
      }else{
        this.addNoticeMoudle = false;
        this.addNotice = false;
      }
      if(url.name == 'notice-add' || url.name == 'notice-edit'){
        console.log('add && edit');
        this.title = '发公告'
      }else{
        console.log('list');
        this.title = '公告详情'
      }
    }

  },
  mounted: function () {
    this.btn();

  },
  watch: {
    '$route' (to, from){
      this.btn();
    }
  },
  components: {

  }
}
</script>
<style lang="scss">

</style>

