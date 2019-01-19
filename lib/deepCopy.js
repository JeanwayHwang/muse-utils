/**
 * @desc 对象深拷贝
 * @param {Object} obj：原始对象
 * @return 
 */

const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
 }
 
 module.exports = deepCopy;