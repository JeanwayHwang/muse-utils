/**
 * @desc 判断是否为Boolean类型
 * @param {obj} 判断对象
 * @return {Boolean} 
 */

const isBoolean = (obj) => {
    return obj === !!obj;
}
 
module.exports = isBoolean;