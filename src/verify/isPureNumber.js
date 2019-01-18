/**
 * @desc 校验是否纯数字输入
 * @param {obj} 待校验字符串
 * @return {Boolean}
 */

const isPureNumber = (obj) => {
    return /^\d+$/.test(str);
}
 
module.exports = isPureNumber;