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
  },
  {
    name: "ssoclient",
    component: "common/ssoclient.vue",
    path: "/ssoclient"
  },
];
export default data;
