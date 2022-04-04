// let first = (arr , n) => {
//     let firstLetter = [];
//     let length = n;
//     if (n === undefined || n === 1) {
//         firstLetter = arr[0]
//         return firstLetter
//     } else {
//         firstLetter = arr.slice(0, n);
//         return firstLetter        
//     } 
// }

// ^orginal
//new

const first = (arr, n = 1) => {
    if (n === 1 ) return arr[0];
    return arr.slice(0, n);
}


console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]