const filterRange = function (arr, a ,b) {
    return arr.filter(n => n >= a && n <= b)
}

let result = filterRange([3, 9, 2, 8, 4], 3, 6)

console.log(result)