/**
 * @desc 校验邮编是否合法
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isPostCode = (string) => {
    return /^\d{6}$/.test(string);
}
 
module.exports = isPostCode;