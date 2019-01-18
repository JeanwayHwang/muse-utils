/**
 * @desc 判断是否为Mac设备
 * @return {Boolean} 
 */

const isMac = () => {
    return navigator.platform.toLowerCase().indexOf('mac') > -1;
 }
 
module.exports = isMac;