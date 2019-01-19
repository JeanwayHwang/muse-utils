/**
 * @desc 判断是否处于两个时间点之间
 * @param {Number} 起始时间点的时间戳
 * @param {Number} 截止时间点的时间戳
 * @param {Number} 源时间点（可选，若无该参数则源时间点为当前时间）
 * @return {Boolean} 
 */
const compareWithMoment = require('./compareWithMoment');
const isTimeBetween = (startTime, endTime, originTime) => {
    originTime = originTime || new Date().getTime();
    return compareWithMoment(startTime, originTime) >= 0 && compareWithMoment(endTime, originTime) <= 0;
}

module.exports = isTimeBetween;