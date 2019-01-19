/**
 * @desc 获取今天0点的时间戳
 * @return {NUmber}
 */

const getTodayZeroAM = () => {
    return new Date(new Date().toLocaleDateString()).getTime();
 }
 
 module.exports = getTodayZeroAM;