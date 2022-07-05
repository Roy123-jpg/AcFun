/**
 * @author hjx
 * @func 根据path  判断是否在数组中
 * @params {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
    // 1. path 全部匹配  /cities
    // 2. path 多了  /homedetail/ : id/cmments/ : abc
    const arr = ['/cities', '/homedetail']
    // 任何情况  结果数组第二项都是arr里匹配的单项
    
    // 完全匹配
    // arr.forEach(item => {
    //     if(item === path) {
    //         return true;
    //     }
    //     console.log(item === path);
    //     // 部分匹配
    //     if (path.lastIndexOf('/') !== 0) {
    //         // 正则 path 的第二个/前面的部分
    //         //   / 转义 \/
    //         //   \w  一个字符
    //         //   \w+  一个或多个字符
    //         const reg = /^(\/[\w]+)\//;
    //         // console.log(path.match(reg));
    //         const matchArr = path.match(reg);
    //         const partlyPath = reg[1]? mathArr[1]:'';
    //         // console.log(matchArr);
    //         if (partlyPath) {
    //             return partlyPath === item
    //         }
    //     }

    // })
    // if (arr.indexOf(path) != -1) return true
    // if (path.lastIndexOf('/') !== 0) {
    //     const reg = /^(\/[\w]+)\//
    //     const matchArr = path.match(reg)
    //     console.log(matchArr);
    //     const partlyPath = matchArr[1]?matchArr[1]:'';
    //     if (partlyPath) {
    //         return arr.indexOf(partlyPath) != -1
    //     }
    // }
    let pathRes = path.split('/')
    if (arr.indexOf('/' + pathRes[1]) != -1) return true;
    return false
}