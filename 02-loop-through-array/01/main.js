const isValidNumber = number => {
    if (number === null || number.trim() === '' || isNaN(number)) return false;
    return true
}

const resultArr = [];
while(1) {
    const input = prompt('enter number');
    if (!isValidNumber(input)) {
        break;
    } else 
    resultArr[resultArr.length] = +input;
}

let sum = 0; 
for (let el of resultArr) {
    sum += el; 
}

console.log(sum)