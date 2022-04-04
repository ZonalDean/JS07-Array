let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

const count = {}; // declare an emmpty object

for (const element of names) {
    if (count[element]) { // if array element has been encounterd add 1 to the corresponding key [element]
        count[element] += 1;
    } else {
        count[element] = 1; // if array element hasn't been encounterd create a key and set intial value to 1
    }
}


console.log(count)