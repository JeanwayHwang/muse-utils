/**
 * @desc 校验是否纯数字和字母输入
 * @param {obj} 待校验字符串
 * @return {Boolean}
 */

const isOnlyNumberAndLetter = (obj) => {
    return /^[\d|[a-z]|[A-Z]]+$/.test(str);
}
 
module.exports = isOnlyNumberAndLetter;