/**
 * @desc 获取滚动条距顶部距离
 * @return {Number}
 */

const getScrollTop = () => {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

module.exports = getScrollTop;