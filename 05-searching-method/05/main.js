const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

// let findCherries = inventory.filter(item => item.id === 'cherries');

// console.log(findCherries)

let findCherries = item => {
    return item.name === 'cherries';
}

console.log(inventory.find(findCherries))
