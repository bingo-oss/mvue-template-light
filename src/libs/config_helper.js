/**
 * 苯mvueCore.config扩展
 */
if (!window.config) {
  alert("全局配置文件未引入，请检查项目代码");
}
//你可以添加自己项目的特殊配置
var mvueCoreConfig=require('mvue-toolkit/src/config/config');
var mergedConfig=_.extend({},mvueCoreConfig,window.config);

module.exports = mergedConfig;
