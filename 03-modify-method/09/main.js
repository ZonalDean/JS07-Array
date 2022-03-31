const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];

let insert = (arr, start, finish) => {
    let result = arr.slice(start,finish+1) 
    return result;
}

let newSports = insert(sports,1,3)

console.log(newSports)