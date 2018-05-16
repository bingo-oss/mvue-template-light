<template>
  <div class="layout">
    <Row>
      <Col span="4">
        <div class="layout-logo-left">
          <i-button @click="addStyle" type="dashed" size="large" long icon="plus-round">新建分类</i-button>
        </div>

        <Menu ref="menudom" :active-key="activekey" width="auto" @on-select="open">
          <Menu-item :name="item.clasId":key="item.clasId" v-for="(item, index) in data">
            <span class="layout-text">{{item.name}}</span>
          </Menu-item>
        </Menu>
      </Col>
      <Col span="20">
        <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";
  import menu from "../../menu/menu";

export default {
  data: function () {
    return {
      data: [
        {
          clasId: 'all',
          name: '所有'
        }
      ],
      activekey: 'all',
      modal: false,
      clasName: ''
    };
  },
  methods: {
    addStyle (){
      this.$Modal.info({
        title: '分类名',
        render: (h, params) => {
          return h('div', [
            h('p', {
              'class': 'mt20'
            },'新建分类默认排序最后，可在分类列表中调整显示排序'),
            h('Input', {
              props: {
                type: 'text',
                placeholder: '请输入名称(限10个字符)',
                value: this.clasName
              },
              on: {
                'on-blur':(event) => {
                  this.clasName = event.target.value
                }
              }
            })
          ]);
        },
        onOk: () => {
          this.data.push({
            clasId : this.data.length+1,
            name: this.clasName
          });
        }
      });
    },
    open (key){
      this.activekey = key;
      this.$router.push({name: 'notice-list', params: {clasId: key}});
    }
  },
  mounted: function () {
    console.log('clas mounted');

  },
  watch: {
    '$route' (to, from){
      console.log(888);
      console.log(this.$route);
    }
  },
  components: {

  }
}
</script>
<style lang="scss">
</style>

