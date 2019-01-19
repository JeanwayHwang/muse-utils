/**
 * @desc 校验手机号码是否合法
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isMobileNumber = (string) => {
    return /^1[\d]{10}$/.test(string);
}
 
module.exports = isMobileNumber;