/**
 * @desc 合并对象（同样属性会覆盖）
 * @param {Object} 待合并对象
 * @return {Object}
 */

const mergeObject = (...params) => {
    const newObj = {};
    for(var i = 0;i < params.length;i ++) {
        let obj = params[i];
        Object.keys(obj).forEach((key) => {
            newObj[key] = obj[key];
        });
    }
    return newObj;
 }
 
 module.exports = mergeObject;