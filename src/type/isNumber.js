/**
 * @desc 判断是否为Number类型
 * @param {obj} 判断对象
 * @return {Boolean} 
 */

const isNumber = (obj) => {
    return obj === +obj;
}
 
module.exports = isNumber;