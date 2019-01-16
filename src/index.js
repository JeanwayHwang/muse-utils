/**
 * @description webpack打包入口文件
 * @example webpack构建时批量引入当前目录下的全部js文件
 */

let allModules = {};
const ctx = require.context('./', true, /^\.\/.+\/.+\.js$/); // 匹配./xxx/xxx.js
ctx.keys().forEach(key => {
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    allModules[attr] = ctx(key);
});

module.exports = allModules;