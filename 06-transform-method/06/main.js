let arr = ['React', 'Vue', 'Angular'];

let copySorted = input => {
    let result = [...input];
    result.sort(function(a,b) {
        if (a < b) return -1;
    })
    return result
}

let sorted = copySorted(arr);

console.log(arr); // React, Vue, Angular (no changes)
console.log(sorted); // Angular, React, Vue