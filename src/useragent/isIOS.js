/**
 * @desc 判断是否为IOS设备
 * @return {Boolean} 
 */

const isIOS = () => {
    return /iPhone/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent);
 }
 
module.exports = isIOS;