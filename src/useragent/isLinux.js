/**
 * @desc 判断是否为Linux设备
 * @return {Boolean} 
 */

const isLinux = () => {
    return navigator.platform.toLowerCase().indexOf('linux') > -1;
 }
 
module.exports = isLinux;