/**
 * @desc 校验电话号码是否合法
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isPhoneNumber = (string) => {
    return /^0\d{2,3}-?\d{7,8}$/.test(string);
}
 
module.exports = isPhoneNumber;