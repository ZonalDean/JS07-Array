let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin]; // changed the names because they were wrong lol


console.log(arr)

getAverageAge = arr => {
    let count = arr.length;
    let result = arr.reduce((sum, n) => {
        sum += n.age;
        return sum;
    }, 0)
    return +(result / count).toFixed(2)
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33