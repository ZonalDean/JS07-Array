const person = ['John', 'Jay', 'Jim', 'Jame'];

let removeFromArr = (arr, x, y, z) => {
    index = arr.indexOf[x];
    arr.splice(index, 1 , x, y, z)
    return arr
}

console.log(removeFromArr(person,'Jay','Jack','Joe'))