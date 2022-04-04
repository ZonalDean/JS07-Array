let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


let result = [];
alphabets.filter((n) => {
  if (result.find((char) => char === n) === undefined) {
    result.push(n);
  }
});
console.log(result);