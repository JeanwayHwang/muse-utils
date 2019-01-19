/**
 * @desc 倒计时格式化
 * @param {Number} targetTime：目标时间点的时间戳
 * @param {Boolean} padLeft：是否补零
 * @return {Object} 格式化后的年月日时分秒累计值
 */

const countDown = (targetTime, padLeft) => {
    const leftTime = targetTime - new Date().getTime();
    let day = hour = min = sec = 0;
    if(leftTime > 0) {
        day = parseInt(leftTime / 1000 / 60 / 60 / 24, 10),
        hour = parseInt(leftTime / 1000 / 60 / 60 % 24, 10),
        min = parseInt(leftTime / 1000 / 60 % 60, 10),
        sec = parseInt(leftTime / 1000 % 60, 10);
    }
    if(padLeft) {
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
    }
    return {day, hour, min, sec};
}

module.exports = countDown;