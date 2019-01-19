/**
 * @desc 校验邮箱是否合法
 * @param {String} 待校验字符串
 * @return {Boolean}
 */

const isMailAccount = (string) => {
    return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(string);
}
 
module.exports = isMailAccount;