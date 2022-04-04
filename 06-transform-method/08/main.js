const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];

// sumWeight = scores.reduce((sum, n) => sum + n.weight, 0);

// scores.reduce((sum, n) => {
//     sum = sum + (n.score * n.weight) / sumWeight;
//     return sum;
//   }, 0);
  
// scoreWeighted((array) => {
//   let sumWeight = array.reduce((sum, n) => sum + n.weight, 0);
//   let result = array.reduce((sum, n) => {
//     sum += (n.score * n.weight) / sumWeight;
//     return sum
//   })
//   return result
// })

// console.log(scoreWeighted(scores))

console.log(scores.reduce((result, element) => result += element.score * element.weight,0))