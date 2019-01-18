/**
 * @desc 判断是否为Array类型
 * @param {obj} 判断对象
 * @return {Boolean} 
 */

const isArray = (obj) => {
    return obj instanceof Array;
}
 
module.exports = isArray;