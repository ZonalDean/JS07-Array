let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const findMinMax = arr.reduce((result, element) => {
    result[0] = result[0] < element ? result[0] : element;
    result[1] = result[1] > element ? result[1] : element;
    return result;
},[])

console.log(findMinMax)