let result = 0;
const array = [29, 17, 13, 47, 23, 31];

const accSum = increment => {
    result += increment;
}

array.forEach(accSum)

console.log(result); 