/**
 * @desc 校验是否纯中文输入
 * @param {obj} 待校验字符串
 * @return {Boolean}
 */

const isPureChinese = (obj) => {
    return /^[\u4E00-\u9FFF]+$/.test(str);
}
 
module.exports = isPureChinese;