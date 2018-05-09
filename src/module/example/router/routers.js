import routers from "src/router/routers";

//当前模板的路由
routers.push(
    {
      meta: {
        module: "example",
        requiresAuth: true
      },
      name: "exampleIndex",
      path: "/",
      component: "home/home.vue",
    }
);

debugger;
var routersData = mvueCore.router.getModuleRoutes("example", routers,function (component) {
  return require('src/module/example/view/' + component);
});

export default routersData;
