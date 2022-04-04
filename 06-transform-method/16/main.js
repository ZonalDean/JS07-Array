const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

sexGroup = arr => {
    let result = {} // declare empty object for result
    const male = [] // declare empty array for males
    const female = [] // declare empty array for females

    // filter each key of arr
    arr.filter((n) => {
        if (n.sex === 'M') { // if key sex = M push key name to male
            male.push(n.name)
        }
    });

    // filter each key of arr
    arr.filter((n) => {
        if(n.sex === "F") { // if key sex = F push key name female
            female.push(n.name)
        }
    });

    result.M = male // result M key = male array
    result.F = female // result F key = female array

    return result 
}

console.log(sexGroup(persons))