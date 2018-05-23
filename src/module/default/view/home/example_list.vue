<template>
  <div  class="layout flex1">
    <div class="layout-content flex-column flex1">
      <div class="layout-content-main flex-column flex1">
        <Tabs id="list-tabs" :animated="false" active-key="key1">
          <Tab-pane v-for="(value, index) in dataApp" :label="value.title" :key="'key'+index">
            <Carousel autoplay :autoplay-speed=5000 class="mb20" v-if="index == 0">
              <Carousel-item v-for="(v, i) in data" :key="i">
                <div class="demo-carousel textalignC">
                  <img :src='v.src' />
                </div>
              </Carousel-item>
            </Carousel>

            <div class="centerauto">
              <div class="textalignC mb20">
                <i-button @click="goto('page')" size="large" type="primary" icon="ios-compose">页面开发</i-button>
                <i-button @click="goto('config')" size="large" type="primary" icon="ios-cog">应用配置</i-button>
                <i-button @click="goto('api')" size="large" type="primary" icon="network">接口调用</i-button>
                <i-button @click="goto('sso')" size="large" type="primary" icon="disc">单点登录</i-button>
              </div>
              <h2><Icon type="ios-keypad"></Icon> 示例展示</h2>
              <ul class="layout-flow-box clearfix">
                <li class="flow-style" v-for="(values, indexs) in value.app" :key="indexs">
                  <div class="app-box" @click="gotoExample(values.name)">
                    <div class="app-pic">
                      <img :src='values.src' />
                    </div>
                    <h5 class="textalignC mt20">{{values.title}}</h5>
                    <p class="textalignC gray">{{values.desc}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </Tab-pane>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

  export default {
    data: function () {
      return {
        data: [
          {
            src: require('../../../../images/carousel/11.jpeg')
          },{
            src: require('../../../../images/carousel/22.jpeg')
          }
        ],
        dataApp: [
          {
            title: 'MVUE',
            app: [
              {
                name: 'notice',
                title: '公告',
                icon: 'speakerphone',
                src: require('../../../../images/list/notice.png'),
                desc: '发布群公告，编辑群公告管理'
              },
              {
                name: 'approve',
                title: '审批',
                icon: 'person-stalker',
                src: require('../../../../images/list/approve.png'),
                desc: '审批——出勤休假、人事、财务、行政'
              },
              {
                name: 'log',
                title: '日志',
                icon: 'pie-graph',
                src: require('../../../../images/list/log.png'),
                desc: '日志——日报，周报，月报'
              }
            ]
          }
        ]
      };
    },
    methods: {

      gotoExample:function (name) {
        if(name == 'log'){
          window.location.href=`./example.html#/${name}/list`
        }else if(name == 'approve'){
          window.location.href=`./example.html#/${name}/initiate`
        }else {
          window.location.href="./example.html#/notice/clas/list";
        }
      },
      goto: function (name) {
        window.open(`http://dev.bingocc.com/mvue/light/${name}.html`)
      },
    },
    mounted: function () {
      // this.user = mvueCore.session.getCurrentUser();
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
  .layout{
    background: #f5f7f9;
  }
  .layout-content{
    background: transparent;
  }
  #list-tabs, #list-tabs .ivu-tabs-content, #list-tabs .ivu-tabs-tabpane{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #list-tabs .ivu-tabs-tabpane{
    overflow-y: auto;
  }
  #list-tabs .ivu-tabs-nav-scroll{
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  #list-tabs .ivu-tabs-nav{
    float: none;
  }
  #list-tabs .ivu-tabs-nav .ivu-tabs-tab{
    padding: 16px 30px;
    font-size: 16px;
  }
  #list-tabs .ivu-carousel, .centerauto{
    width: 801px;
    margin-left: auto;
    margin-right: auto;
  }

  .layout-flow-box .flow-style{
    /*border: none;*/
    width: 257px;
    padding: 5px;
  }
  .app-box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .app-pic{
    border-radius: 10px;
    width: 245px;
    /*height: 240px;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app-pic img{
    width: 245px;
  }

</style>

