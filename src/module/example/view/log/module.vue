<template>
  <div class="m20 flex-column flex1 po-r">

    <ul class="layout-flow-box layout-scroll clearfix">
      <li class="flex-column">
        <div class="layout-c-title flex-row">
          <span class="circle">月</span>
          <h5>月报</h5>
        </div>
        <div class="layout-c-content flex1">
          <p><span class="gray">本月工作内容：</span><span>可填写文本类型</span></p>
          <p><span class="gray">本月工作总结：</span><span>可填写文本类型</span></p>
          <p><span class="gray">下月工作计划：</span><span>可填写文本类型</span></p>
        </div>
        <div class="layout-c-footer flex-row flex1">
          <span class="flex1">2018-05-08 14:48</span><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">修改</a>
        </div>
      </li>
      <li class="flex-column">
        <div class="layout-c-title flex-row">
          <span class="circle">周</span>
          <h5>周报</h5>
        </div>
        <div class="layout-c-content flex1">
          <p><span class="gray">本周工作内容：</span><span>可填写文本类型</span></p>
          <p><span class="gray">本周工作总结：</span><span>可填写文本类型</span></p>
          <p><span class="gray">下周工作计划：</span><span>可填写文本类型</span></p>
        </div>
        <div class="layout-c-footer flex-row flex1">
          <span class="flex1">2018-05-08 14:48</span><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">修改</a>
        </div>
      </li>
      <li class="flex-column">
        <div class="layout-c-title flex-row">
          <span class="circle">日</span>
          <h5>日报</h5>
        </div>
        <div class="layout-c-content flex1">
          <p><span class="gray">今日工作内容：</span><span>可填写文本类型</span></p>
          <p><span class="gray">今日未完成：</span><span>可填写文本类型</span></p>
          <p><span class="gray">明日工作计划：</span><span>可填写文本类型</span></p>
        </div>
        <div class="layout-c-footer flex-row flex1">
          <span class="flex1">2018-05-08 14:48</span><a href="javascript:void(0);">删除</a><a href="javascript:void(0);">修改</a>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
  import  channelService from "src/services/example/channel_service";

  export default {
    data: function () {
      return {
        tabItem: [
          {
            title: '全部',
            lists: [
              {
                people: '悦青',
                title: '李悦青的日报',
                time: '05.08 14:48',
                content: '今日完成工作: 调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软件”方式为客户提供记账服务。当前累计服务客户总数近3000家。对于创业者来说，管理非常重要。很多营销人去创业时完全不知道如何治理公司，只是做过一些管理，甚至连管理都没做过，只是做业务。他们不会交代任务，一口气给下属交代一件事。营销人是靠嘴交代工作的，可下属未必能跟上你的思路，从而任务完成情况达不到预期。正确的工作方式应该是：手把手拉着下属把这个工作流程走一遍，做完了以后，给他建一个系统流程和标准。我把这个标准化流程建成了一个个日志模板，现在我们公司在钉钉日志上已经有...',
                commit: [
                  {
                    user: '李悦青',
                    content: '11111'
                  }
                ],
                goods: [
                  {
                    user: '李悦青',
                    id: '1212'
                  }
                ]
              },
              {
                people: '悦青',
                title: '李悦青的日报',
                time: '05.08 14:48',
                content: '今日完成工作: 调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软件”方式为客户提供记账服务。当前累计服务客户总数近3000家。对于创业者来说，管理非常重要。很多营销人去创业时完全不知道如何治理公司，只是做过一些管理，甚至连管理都没做过，只是做业务。他们不会交代任务，一口气给下属交代一件事。营销人是靠嘴交代工作的，可下属未必能跟上你的思路，从而任务完成情况达不到预期。正确的工作方式应该是：手把手拉着下属把这个工作流程走一遍，做完了以后，给他建一个系统流程和标准。我把这个标准化流程建成了一个个日志模板，现在我们公司在钉钉日志上已经有...',
                commit: [
                  {
                    user: '李悦青',
                    content: '11111'
                  }
                ],
                goods: [
                  {
                    user: '李悦青',
                    id: '1212'
                  }
                ]
              },
            ]
          },
          {
            title: '未读',
            lists: [
              {
                people: '悦青',
                title: '李悦青的日报',
                time: '05.08 14:48',
                content: '今日完成工作: 调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软件”方式为客户提供记账服务。当前累计服务客户总数近3000家。对于创业者来说，管理非常重要。很多营销人去创业时完全不知道如何治理公司，只是做过一些管理，甚至连管理都没做过，只是做业务。他们不会交代任务，一口气给下属交代一件事。营销人是靠嘴交代工作的，可下属未必能跟上你的思路，从而任务完成情况达不到预期。正确的工作方式应该是：手把手拉着下属把这个工作流程走一遍，做完了以后，给他建一个系统流程和标准。我把这个标准化流程建成了一个个日志模板，现在我们公司在钉钉日志上已经有...',
                commit: [
                  {
                    user: '李悦青',
                    content: '11111'
                  }
                ],
                goods: [
                  {
                    user: '李悦青',
                    id: '1212'
                  }
                ]
              }
            ]
          },
          {
            title: '我发出的',
            lists: [
              {
                people: '悦青',
                title: '李悦青的日报',
                time: '05.08 14:48',
                content: '今日完成工作: 调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软件”方式为客户提供记账服务。当前累计服务客户总数近3000家。对于创业者来说，管理非常重要。很多营销人去创业时完全不知道如何治理公司，只是做过一些管理，甚至连管理都没做过，只是做业务。他们不会交代任务，一口气给下属交代一件事。营销人是靠嘴交代工作的，可下属未必能跟上你的思路，从而任务完成情况达不到预期。正确的工作方式应该是：手把手拉着下属把这个工作流程走一遍，做完了以后，给他建一个系统流程和标准。我把这个标准化流程建成了一个个日志模板，现在我们公司在钉钉日志上已经有...',
                commit: [
                  {
                    user: '李悦青',
                    content: '11111'
                  }
                ],
                goods: [
                  {
                    user: '李悦青',
                    id: '1212'
                  }
                ]
              }
            ]
          },
          {
            title: '日报',
            lists: [
              {
                people: '悦青',
                title: '李悦青的日报',
                time: '05.08 14:48',
                content: '今日完成工作: 调果师COO肖洪涛：“我用日志实现标准化管理”调果师成立于2013年，以成为“最贴心的农企服务平台”为目标，通过“会计＋saas软件”方式为客户提供记账服务。当前累计服务客户总数近3000家。对于创业者来说，管理非常重要。很多营销人去创业时完全不知道如何治理公司，只是做过一些管理，甚至连管理都没做过，只是做业务。他们不会交代任务，一口气给下属交代一件事。营销人是靠嘴交代工作的，可下属未必能跟上你的思路，从而任务完成情况达不到预期。正确的工作方式应该是：手把手拉着下属把这个工作流程走一遍，做完了以后，给他建一个系统流程和标准。我把这个标准化流程建成了一个个日志模板，现在我们公司在钉钉日志上已经有...',
                commit: [
                  {
                    user: '李悦青',
                    content: '11111'
                  }
                ],
                goods: [
                  {
                    user: '李悦青',
                    id: '1212'
                  }
                ]
              }
            ]
          },
          {
            title: '周报',
            lists: []
          },
          {
            title: '月报',
            lists: []
          }
        ],
        imgurl: require('../../../../images/nodata.jpeg'),
        formCustom: {
          people: '',
          select: ''
        },

        tagItems: [
          {
            title: '今日',
            id: 'today'
          },
          {
            title: '本周',
            id: 'week'
          },
          {
            title: '本月',
            id: 'month'
          }
        ],
        activeTag: -1
      };
    },
    methods: {
      commitFn (){
        this.$Message.warning('该评论功能开发中，敬请期待')
      },
      tagFn (index){
        this.activeTag = index;
      },
      iconClick (){
        this.$Message.warning('你已点过赞了')
      },
      handleSubmit (name) {
        // this.$router.push({path: '/log/list'});
        this.$refs.sf.handleClose();
      }
    },
    mounted: function () {
      console.log('clas mounted');

    },
    watch: {
      '$route' (to, from){
        console.log(this.$route);
      }
    },
    components: {

    }
  }
</script>
<style lang="scss">
  .layout-c-title{
    border-bottom: 1px solid #dddee1;
    margin: 15px;
    padding-bottom: 15px;
  }
  .circle{
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
  .layout-c-content{
    padding: 0px 15px 15px;
  }
  .layout-c-footer{
    padding: 8px 15px;
    background-color: lightgray;
  }
  .layout-c-footer a{
    margin-left: 15px;
  }
</style>

