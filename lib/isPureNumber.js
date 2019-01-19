/**
 * @desc 校验是否纯数字输入
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isPureNumber = (string) => {
    return /^\d+$/.test(string);
}
 
module.exports = isPureNumber;