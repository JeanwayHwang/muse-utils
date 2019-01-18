/**
 * @desc 小于10的数字左侧补零
 * @param {Number} 待处理数字
 * @return  
 */

const padLeft = (num) => {
    return num < 10 ? '0' + num : num;
 }
 
 module.exports = padLeft;