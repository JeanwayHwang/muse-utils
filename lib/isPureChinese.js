/**
 * @desc 校验是否纯中文输入
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isPureChinese = (string) => {
    return /^[\u4E00-\u9FFF]+$/.test(string);
}
 
module.exports = isPureChinese;