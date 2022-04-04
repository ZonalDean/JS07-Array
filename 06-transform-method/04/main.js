const arr = [-3, 2, 0, -7, 4, 6];

const squareNumeric = (input) => {
    const numeric = (a,b) => {
        if (a < b) {
            return -1
        }
    }
    input.map((n,i) => {
        input[i] = n**2
    })
    input.sort(numeric)
    return input
}

console.log(squareNumeric(arr))