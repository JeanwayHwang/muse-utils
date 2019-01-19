/**
 * @desc 判断是否为String类型
 * @param {obj} 判断对象
 * @return {Boolean} 
 */

const isString = (obj) => {
    return obj === '' + obj;
}
 
module.exports = isString;