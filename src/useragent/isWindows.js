/**
 * @desc 判断是否为Windows设备
 * @return {Boolean} 
 */

const isWindows = () => {
    return navigator.platform.toLowerCase().indexOf('win') > -1;
 }
 
module.exports = isWindows;