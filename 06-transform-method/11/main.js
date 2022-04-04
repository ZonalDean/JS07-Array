let str = 'I live in Thailand';

// This is probalby really bad code, so umm sorry future me and who ever reads it
    // I've added comments, hope it helps <3

    str = str.toLowerCase()

    const arr = str.split(' ') // split str to remove spaces

    str = arr.join() // rejoin with spaces removed

    const result = {} // declare empty object

    for (let char of str) { 
        if (result[char] && char !== ',') { //if char exists in objecy and not ',' +1
            result[char] += 1
        } else if (char !== ',') { //if not ',' then make key and set value to 1
            result[char] = 1
        }
    }

console.log(result)
console.log(arr)