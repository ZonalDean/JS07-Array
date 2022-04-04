const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

let findNegative = n => {
    return n < 0;
}

console.log(nums.find(n => n < 0))

// let findNegative = (arr) => {
//     let result = []
//     arr.find(function (item = item < 0) {
//         result.push(item)
//     })
// }

// console.log(findNegative(nums))

// console.log(nums.find(function (item = item < 0){}))