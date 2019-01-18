/**
 * @desc 校验邮编是否合法
 * @param {obj} 待校验字符串
 * @return {Boolean}
 */

const isPostCode = (obj) => {
    return /^\d{6}$/.test(str);
}
 
module.exports = isPostCode;