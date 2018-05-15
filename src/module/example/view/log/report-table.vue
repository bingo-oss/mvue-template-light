<template>
  <div class="report">
    <div class="textalignR"><a class="a-style-none" href="javascript:void(0)" @click="scv">导出</a></div>
    <Table class="mt20" ref="table" :columns="columns" :data="dataNew" border></Table>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

  export default {
    data: function () {
      return {
        columns: [
          {
            title: '填报人',
            key: 'name'
          },
          {
            title: '填报时间',
            key: 'updateAt'
          },
          {
            title: '今日完成工作',
            key: 'content1',
            render: (h, params) => {
              return h('div', {
                style: {
                  padding: '20px'
                },
                on: {
                  click: () => {
                    params.row.content1Desc = params.row.content1;
                  }
                }
              }, params.row.content1Desc);
            }
          },
          {
            title: '未完成工作',
            key: 'content2',
            align: 'center',
          },
          {
            title: '需协调工作',
            key: 'content3',
            align: 'center'
          }
        ],
        data: [
          {
            name: '李悦青',
            content1: '调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软',
            content1Desc: '调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立...',
            content2: '欢迎加入',
            content3: '欢迎加入',
            updateAt: '2018-05-08 14：54'
          },
          {
            name: '李悦青',
            content1: '调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软',
            content1Desc: '调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立...',
            content2: '欢迎加入',
            content3: '欢迎加入',
            updateAt: '2018-05-08 14：54'
          }
        ],
        dataNew: []
      };
    },
    methods: {
      scv (){
        this.$refs.table.exportCsv({
          filename: '原始数据'
        });
      },
      getData (){
        this.dataNew =  this.data;
      }
    },
    mounted: function () {
      this.getData();


    },
    watch: {
      '$route' (to, from){
        this.getData();
      }
    },
    components: {

    }
  }
</script>
<style lang="scss">
  .report .a-style-none{
    font-size: 14px;
    display: inline-block;
  }
</style>

