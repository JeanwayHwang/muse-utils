/**
 * @desc 判断是否为Function类型
 * @param {obj} 判断对象
 * @return {Boolean} 
 */

const isFunction = (obj) => {
    return typeof obj === 'function';
}
 
module.exports = isFunction;