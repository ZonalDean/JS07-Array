const filterRange = function (arr, a ,b) {
    return arr.filter(el => el >= a && el <= b)
}

let result = filterRange([3, 9, 2, 8, 4], 3, 6)

console.log(result)