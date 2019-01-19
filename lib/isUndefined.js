/**
 * @desc 判断是否为Undefined类型
 * @param {obj} 判断对象
 * @return {Boolean} 
 */

const isUndefined = (obj) => {
    return typeof obj === 'undefined';
}
 
module.exports = isUndefined;