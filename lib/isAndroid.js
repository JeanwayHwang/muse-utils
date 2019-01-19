/**
 * @desc 判断是否为Android设备
 * @return {Boolean} 
 */

const isAndroid = () => {
    return navigator.userAgent.toLowerCase().indexOf('android') > -1;
}
 
module.exports = isAndroid;