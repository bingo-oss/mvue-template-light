var homeMenu = [
  {
    title: '工作台',
    id: "0000",
    icon: 'ivu-icon ivu-icon-ios-home',
    children: [
      {
        id: "0001",
        title: '活动管理(默认)',
        icon: 'iconfont icon-order',
        link: {
          name:"activityList"
        }
      },
      {
        id: "0002",
        title: '频道管理(自定义)',
        icon: 'iconfont icon-order',
        link: {
          name: 'channelList'
        }
      }
    ]
  },
  /*{
    title: '系统管理',
    id: "1000",
    icon: 'ivu-icon ivu-icon-android-settings',
    children: [
      {
        id: "1001",
        title: '导航管理',
        icon: 'iconfont icon-grid_',
        link: {
          name: 'engineAdmin'
        }
      },
      {
        id: "1002",
        title: '实体管理',
        icon: 'iconfont icon-grid_',
        link: {
          name: 'dbServerAdmin'
        }
      }
    ]
  }*/
];
export  default homeMenu
