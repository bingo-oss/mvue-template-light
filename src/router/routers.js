/**
 * 路由基础文件
 */
var data = [
  {
    meta: {
      module: "default",
      requiresAuth: true
    },
    name: "default",
    path: "/",
    component: "home/home.vue",
    redirect:{name:"exampleList"},
    children:[
      {
        name: 'exampleList',
        path: 'example_list',
        component: 'home/example_list',
      }
    ]
  },
  {
    name: "ssoclient",
    component: "common/ssoclient.vue",
    path: "/ssoclient"
  },
];
export default data;
