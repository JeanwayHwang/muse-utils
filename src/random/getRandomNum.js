/**
 * @desc 生成指定范围[min, max]的随机数
 * @param {Number} min 下限
 * @param {Number} max 上限
 * @return {Number} 
 */

 const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 module.exports = getRandomNum;