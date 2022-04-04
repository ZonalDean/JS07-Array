const cars = ['volvo', 'toyota', 'honda', 'ford'];

let index = cars.indexOf('honda')+1
cars.splice(index,0,'mazda','bmw','nissan')

console.log(cars)