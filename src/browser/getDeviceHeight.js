/**
 * @desc 获取设备高度
 * @return {Number}
 */

const getDeviceHeight = () => {
    return document.documentElement.clientHeight || window.innerHeight;
}

module.exports = getDeviceHeight;