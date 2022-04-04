// let str = '31 45 12 67 34 86 23 37 19 41';

// // sumLessThan40 = string => {
//     str = str.split(' ');
//     let result = str.reduce((sum, current) => {
//         if (Number(current) < 40) {
//             sum += Number(current)
//         }
//     }, 0)
//     console.log(result)
//     // return result
// // }

// // console.log(sumLessThan40(str))

let str = '31 45 12 67 34 86 23 37 19 41';

str = str.split(' ')

str.reduce((result, element) => {
    if(+element < 40) result += +element
}, 0)

console.log(str)