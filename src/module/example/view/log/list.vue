<template>
  <div class="m20 flex-column flex1 po-r">
    <div class="po-a">
      <span class="icon-color" @click="commitFn"><Icon size="22" type="ios-chatbubble-outline"></Icon>评论</span>
      <Poptip placement="bottom-end" title="筛选" width="350" ref="sf">
        <span class="icon-color"><Icon size="22" type="ios-flask-outline"></Icon>筛选</span>
        <div slot="content">
          <i-form class="mt20" ref="formCustom" :model="formCustom" label-position="left" :label-width="60">
            <Form-item label="发送人" prop="people">
              <i-input type="text" v-model="formCustom.people" placeholder="点击选择发送人"></i-input>
            </Form-item>
            <Form-item label="开始时间" prop="datestart">
              <Date-picker type="date" placeholder="选择日期" style="width: 258px" v-model="formCustom.datestart"></Date-picker>
            </Form-item>
            <Form-item label="结束时间" prop="dateend">
              <Date-picker type="date" placeholder="选择日期" style="width: 258px" v-model="formCustom.dateend"></Date-picker>
            </Form-item>
            <Form-item>
              <ul class="tag">
                <li :class="[(activeTag == index) ? 'active' : '']" v-for="(item, index) in tagItems" :key="index" @click="tagFn(index)">{{item.title}}</li>
              </ul>
            </Form-item>
            <Form-item label="日志模版" prop="select">
              <i-select v-model="formCustom.select" placeholder="全部">
                <i-option value="all">全部</i-option>
                <i-option value="day">日报</i-option>
                <i-option value="week">周报</i-option>
                <i-option value="month">月报</i-option>
              </i-select>
            </Form-item>
            <Form-item>
              <i-button type="primary" @click="handleSubmit('formCustom')">确定</i-button>
              <i-button type="ghost" @click="handleSubmit('formCustom')" style="margin-left: 8px">重置</i-button>
            </Form-item>
          </i-form>
        </div>
      </Poptip>
    </div>
    <Tabs id="mvue-tab" class="flex-column flex1" active-key="key1" type="card">
      <Tab-pane v-for="(item, index) in tabItem" :label="item.title" :key="index">
        <div class="nodatas flex-column" v-if="item.lists.length === 0">
          <img :src="imgurl">
          <h5>暂无相关日志</h5>
        </div>
        <div class="layout-scroll">
          <div class="layout-content-box flex-row" v-for="(im, i) in item.lists" :key="i">
            <div class="layout-c-l flex-row">{{im.people}}</div>
            <div class="layout-c-c flex1">
              <div class="layout-c-t flex-row">
                <div class="layout-c-t-l flex1">
                  <h4>{{im.title}}</h4>
                  <p class="gray">{{im.time}}</p>
                </div>
                <div class="layout-c-t-r">
                  <Dropdown placement="bottom-end">
                    <a class="a-style-none" href="javascript:void(0)">...</a>
                    <Dropdown-menu slot="list">
                      <Dropdown-item>查看李悦青的所有日志</Dropdown-item>
                      <Dropdown-item>分享</Dropdown-item>
                      <Dropdown-item>修改</Dropdown-item>
                      <Dropdown-item>删除</Dropdown-item>
                    </Dropdown-menu>
                  </Dropdown>
                </div>
              </div>
              <div class="layout-c-c-b">{{im.content}}</div>
              <div class="layout-c-c-b mt20">
                <Icon size="22" type="thumbsup" color="#2d8cf0"></Icon>
                <span v-for="(items, indexs) in im.goods" class="blue">{{items.user}}&nbsp;</span>
              </div>
              <div class="layout-c-c-b">
                <span v-for="(items, indexs) in im.commit"><span class="blue">{{items.user}}:</span> {{items.content}}</span>
              </div>
              <div class="layout-c-b">
                <i-input icon="thumbsup" size="large" @on-click="iconClick()" placeholder="小小鼓励，让团队更凝聚..."></i-input>
              </div>
            </div>
          </div>
        </div>
      </Tab-pane>
    </Tabs>

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
      // ruleCustom: {
      //   people: [
      //     { required: true, message: '请输入标题', trigger: 'blur' }
      //   ],
      //   select: [
      //     {}
      //   ]
      // },
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
   #mvue-tab .ivu-tabs-nav .ivu-tabs-tab{
      font-size: 12px;
   }
   #mvue-tab .ivu-tabs-bar{border-bottom: none;}
   #mvue-tab.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
    border: 1px solid #dddee1;
    border-radius: 4px;
    padding: 5px 16px;
    height: 32px;
    background: #ffffff;
  }
   #mvue-tab.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active{
    background: #2d8cf0;
    color: #ffffff;
  }
   #mvue-tab.ivu-tabs .ivu-tabs-content-animated{
    flex: 1;
  }
   #mvue-tab.ivu-tabs .ivu-tabs-tabpane{
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
   #mvue-tab.ivu-tabs.special .ivu-tabs-tabpane{
     overflow-y: visible;
   }
  .layout-scroll{
    width: 100%;
  }
  .layout-content-box{
    border-radius: 5px;
    padding: 20px;
    background: #ffffff;
    box-shadow: #2aabd2;
  }
  .layout-c-l{
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: dodgerblue;
    border-radius: 100%;
    color: #ffffff;
    margin-right: 10px;
    font-size: 12px;
  }
  .layout-c-c-b{
    line-height: 22px;
  }

  .po-r{
    position: relative;
  }
  .po-a{
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
    z-index: 2;
  }
  .icon-color{
    color: lightslategray;
    display: inline-block;
    margin-left: 10px;
    height: 25px;
    line-height: 25px;
  }
  .icon-color i{
    position: relative;
    bottom: -3px;
    margin-right: 3px;
  }
  .a-style-none{
    font-size: 20px;
  }
  .a-style-none:hover{
    text-decoration: none;
  }
  .blue{
    color: royalblue;
  }
  .tag{
    display: flex;
  }
  .tag li{
    display: inline-block;
    border: 1px solid #dddee1;
    border-radius: 5px;
    margin-right: 5px;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .tag li:hover{
    border-color: #2d8cf0;
    color: #2d8cf0;
  }
  .tag li:hover{
    border-color: #2d8cf0;
    color: #2d8cf0;
  }
  .tag li.active{
    background-color: #2d8cf0;
    color: #ffffff;
  }
  .tag li.active:hover{
    border-color: #2d8cf0;
    color: #ffffff;
  }
  .ivu-poptip-body-content{
    overflow: fragments;
  }
</style>

