const squareArr = input => {
    const result = [];
    for (let el of input) {
        result[result.length] = el**2;
    }
    return result
}
const arr = [2, 3, 5, 7, 11]
const response = squareArr(arr);
console.log(response);