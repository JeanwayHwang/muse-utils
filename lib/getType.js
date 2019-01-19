/**
 * @desc 获取变量的类型
 * @param {obj} 目标变量
 * @return {String}
 */

const getType = (obj) => {
    return Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1);
}
 
module.exports = getType;