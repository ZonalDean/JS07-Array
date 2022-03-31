let clone = arr => {
    let newArr = arr.slice()
    return newArr
}

const arr = [1, 2, 3, 4, 5]

console.log(clone(arr));