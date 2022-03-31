const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

let multiIndexOf = (arr, a) => {
    let empty = [];
    arr.forEach(function (item, index) {
        if (item === a) {
            empty.push(index);
        }
    })
    return empty
    // for (i = 0; i <= arr.length; i++) {
    //     if (arr.indexOf(i) === a) {
    //         empty.push(i)
    //     }    
    // }
}

console.log(multiIndexOf(alphabets, 'a'))