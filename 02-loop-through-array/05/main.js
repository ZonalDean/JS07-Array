const names = ['Mike', 'Sid', 'Jack', 'Bill'];

let logName = (nm , index) => {
    index++;
    console.log(`${index}. ${nm}`)
}

names.forEach(logName);

