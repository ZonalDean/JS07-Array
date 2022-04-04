const nums = [-3, 2, 11, -7, 4, 6];

let multiArr = arr => {
    arr.sort(function(a,b) {
        if (a > b) return -1;
    })
    let result = arr.reduce((sum, current) => sum * current, 1);
    return result
}

console.log(multiArr(nums))