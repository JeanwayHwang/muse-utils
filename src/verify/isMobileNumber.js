/**
 * @desc 校验手机号码是否合法
 * @param {obj} 待校验字符串
 * @return {Boolean}
 */

const isMobileNumber = (obj) => {
    return /^1[\d]{10}$/.test(str);
}
 
module.exports = isMobileNumber;