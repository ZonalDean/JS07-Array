let toCamelCase = input => {
    let array = input.split('-');
    array.map((n,i) => {
        if (i > 0) {
            let firstChar = n.charAt(0).toUpperCase()
            let rest = n.substring(1)
            array[i] = firstChar + rest
            result = array.join('')
        }
    })
    return result
}

console.log(toCamelCase('hello-world'))