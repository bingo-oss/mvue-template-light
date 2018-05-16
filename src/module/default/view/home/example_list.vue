<template>
  <div  class="layout">
    <div class="layout-content">
      <div class="layout-content-main">
        <Tabs :animated="false" active-key="key1">
          <Tab-pane v-for="(value, index) in dataApp" :label="value.title" :key="'key'+index">
            <Carousel autoplay class="mb20" v-if="index == 0">
              <Carousel-item v-for="(v, i) in data" :key="i">
                <div class="demo-carousel textalignC">
                  <img :src='v.src' />
                </div>
              </Carousel-item>
            </Carousel>
            <Row>
              <Col span="4" v-for="(values, indexs) in value.app" :key="indexs">
              <div class="app-box" @click="gotoExample(values.name)">
                <div class="app-pic">
                  <Icon size="60" color="#ffffff" :type="values.icon"></Icon>
                </div>
                <h5 class="textalignC">{{values.title}}</h5>
              </div>
              </Col>
            </Row>
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
            src: require('../../../../images/carousel/1.jpeg')
          },{
            src: require('../../../../images/carousel/2.jpeg')
          }
        ],
        dataApp: [
          {
            title: '办公精选',
            app: [
              {
                name: 'notice',
                title: '公告',
                icon: 'speakerphone'
              },
              {
                name: 'approve',
                title: '审批',
                icon: 'person-stalker'
              }
            ]
          },
          {
            title: '财务精选',
            app: [
              {
                name: 'log',
                title: '日志',
                icon: 'pie-graph'
              }
            ]
          },
        ]
      };
    },
    methods: {

      gotoExample:function (name) {
        if(name == 'log'){
          console.log(111111);
          window.location.href=`./example.html#/${name}/list`
        }else if(name == 'approve'){
          window.location.href=`./example.html#/${name}/initiate`
        }
        // "./example.html#/notice/clas/all/list";
        else {
          window.location.href="./example.html#/notice/clas/list";
        }
      }
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
  .mb20{
    margin-bottom: 20px;
  }
  .layout{
    flex: 1;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    overflow: hidden;
  }
  .layout-content{
    margin: 0px;
    overflow: hidden;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 0px;
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

  .ivu-tabs-nav-scroll{
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .ivu-tabs-nav{
    float: none;
  }
  .ivu-tabs-nav .ivu-tabs-tab{
    padding: 16px 30px;
    font-size: 16px;
  }
  .app-box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .app-pic{
    background-color: deepskyblue;
    border-radius: 10px;
    padding: 20px;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

