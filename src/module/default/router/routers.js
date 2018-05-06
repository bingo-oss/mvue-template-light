import routers from "src/router/routers";

var routersData = mvueCore.router.getModuleRoutes("default", routers,function (component) {
  return require('src/module/default/view/' + component);
});

export default routersData;
