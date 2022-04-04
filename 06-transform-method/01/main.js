// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]

// array.map((n,i) => {
//     array[i] = n*2
// })
// console.log(array)

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]

// array.map((n,i) => {
//     array[i] = String(n)
// })
// console.log(array)

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]

// array.map((n,i) => {
//     array[i] = typeof(n);
// })
// console.log(array)

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]

// array.map((n,i) => {
//     array[i] = n.toUpperCase()
// })
// console.log(array)

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// array.map((n,i) => {
//     if (n % 2 === 0) {
//         array[i] = 'even'
//     } else {
//         array[i] ='odd'
//     }
// })
// console.log(array)

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

// array.map((n,i) => {
//     if (n < 0) {
//         array[i] *= -1
//     }
// })
// console.log(array)

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]

// array.map((n,i) => {
//     array[i] = n.toFixed(2)
// })
// console.log(array)

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// array.map((n,i) => {
//     if (n === 0) {
//         array[i] = 'Jan'
//     } 
//     if (n === 5) {
//         array[i] = 'Jun'
//     } 
//     if (n === 7) {
//         array[i] = 'Aug'
//     } 
//     if (n === 6) {
//         array[i] = 'Jul'
//     } 
//     if (n === 10) {
//         array[i] = 'Nov'
//     } 
// })
// console.log(array)

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]

// array.map((n,i) => {
//     array[i] = i + 1
// })
// console.log(array)

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]

// array.map((n,i) => {
//     array[i] = n.name 
// })
// console.log(array)

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]

// array.map((n,i) => {
//     array[i] = n.age
// })
// console.log(array)

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

// array.map((n,i) => {
//     array[i] = `${n.name} ${n.surname}`
// })
// console.log(array)

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]

// array.map((n,i) => {
//     let inputAge = 2021 - +n.birth.slice(0, 4);
//     n.age = inputAge
// })
// console.log(array)

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

array.map((n,i) => {
    let birthSplit = n.birth.split('-')
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    birthSplit[1] = months[1*(birthSplit[1]) - 1]
    // console.log(birthSplit)
    birthSplit = [birthSplit[2], birthSplit[1], birthSplit[0]];
    birthSplit = birthSplit.join(' ');
    array[i] = `<tr><td>${n.name}<td/><td>${birthSplit}</td></tr>`
})

console.log(array)