//这几个工具类必须在最前面引用，不得删除和更改
import  mvueToolkit from "mvue-toolkit";

window._ = require('lodash');
window.store = require('store2');
window.Vue = require("vue").default;

//利用 XMLHttpRequest 请求资源的快捷方式
function appStart(initFunc) {
  require("babel-polyfill");
  window.mvueCore=_.assign({},mvueToolkit);
  Vue.resource=mvueToolkit.resource;
  mvueToolkit.config.loadServerConfig().then(function () {
    Promise.all([
      import('iview'),import('vue-multiselect')
    ]).then(function ([iview,Multiselect]) {
      require( 'iview/dist/styles/iview.css');
      require("vue-multiselect/dist/vue-multiselect.min.css");
      //加载 iView
      window.iView = iview;
      Vue.use(iView);
      iView.LoadingBar.config({
        color: '#ff9900',
        failedColor: '#f0ad4e'
      });
      //多选组件
      Vue.component("Multiselect",Multiselect.Multiselect);
      //全局组件引入
      require("libs/index_component_init");
      //表单验证控件
      var Vee = require("vee-validate");

      Vue.use(mvueToolkit,{
        vee:Vee,
        baseUrlForResource:mvueToolkit.config.getApiBaseUrl()
      });
      //mvueToolkit(Vue,Vee);
      //加载router
      var VueRouter = require("vue-router").default;
      Vue.use(VueRouter);
      var routesData=null,appEntry=null;
      var result=initFunc();
      if(result&&result.then){
        result.then(function(res){
          routesData=res.routesData;
          appEntry=res.appEntry;
          doStart()
        });
      }else{
        routesData=result.routesData;
        appEntry=result.appEntry;
        doStart()
      }
      function doStart(){
        var router = new VueRouter({
          routes: routesData
        });
        var session=mvueToolkit.session;
        router.beforeEach(function(to, from, next) {
          session.doFilter(to,from,next);
        });
        router.afterEach(function (transition) {
          console.log('-----------------Router Start');
          console.log(transition);
          console.log('-----------------Router End');
        });
        window.router = router;
        var App = appEntry;
        new Vue({
          el: '#app',
          router: router,
          template: '<App/>',
          components: {App}
        });
      }
    }).catch(function (err) {
      console.log('Failed to load vue vue-router iview', err);
    });
  });
}

export default{
    appStart:appStart
}
