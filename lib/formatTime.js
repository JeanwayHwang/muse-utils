/**
 * @desc 格式化日期
 * @param {Number} date：日期对象
 * @param {Boolean} padLeft：是否补零
 * @return {Object} 年月日时分秒的聚合对象
 */

const formatTime = (date, padLeft) => {
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    if(padLeft) {
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
    }
    return {year, month, day, hour, min, sec};
}

module.exports = formatTime;