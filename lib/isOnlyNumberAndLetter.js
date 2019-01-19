/**
 * @desc 校验是否纯数字和字母输入
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isOnlyNumberAndLetter = (string) => {
    return /^(\d|[a-z]|[A-Z])+$/.test(string);
}
 
module.exports = isOnlyNumberAndLetter;