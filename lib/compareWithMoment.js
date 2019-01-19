/**
 * @desc 比较两个时间点的早晚关系
 * @param {Number} 目标时间点的时间戳
 * @param {Number} 源时间点的时间戳（可选，若无该参数则源时间点为当前时间）
 * @return {Number} -1：早于目标时间点 0：等于目标时间点 1：晚于目标时间点
 */

const compareWithMoment = (targetTime, originTime) => {
    const gap = (originTime || new Date().getTime()) - targetTime;
    return gap > 0 ? 1: (gap === 0 ? 0: -1);
}

module.exports = compareWithMoment;