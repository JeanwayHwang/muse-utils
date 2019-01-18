/**
 * @desc 校验邮箱是否合法
 * @param {obj} 待校验字符串
 * @return {Boolean}
 */

const isMailAccount = (obj) => {
    return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(str);
}
 
module.exports = isMailAccount;