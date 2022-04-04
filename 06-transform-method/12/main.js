let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

let flatArray = flattened.reduce((acc, current) => {
    return acc.concat(current)
}, []);

console.log(flatArray)