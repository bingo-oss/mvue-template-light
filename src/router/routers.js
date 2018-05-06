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
    meta: {
      module: "default"
    },
    name: "ssoclient",
    component: "common/ssoclient.vue",
    path: "/ssoclient"
  },
];
export default data;
