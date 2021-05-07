// export default 5
// export const a = 1；
module.exports = 15;//使用module is 导出 报错，看成了es模块，而es模块不是放在函数执行的，是在引擎执行的,module是放在函数执行的

// 要么全用es 要么全用moudle，webpack，把所有模块化都变成函数环境。