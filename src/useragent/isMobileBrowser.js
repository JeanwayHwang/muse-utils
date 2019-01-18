/**
 * @desc 判断是否为移动设备浏览器
 * @return {Boolean} 
 */

const isMobileBrowser = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
 }
 
module.exports = isMobileBrowser;