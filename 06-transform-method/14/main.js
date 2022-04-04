const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

const obj = {}
products.forEach((n) => {
    let number = n.id
    obj[number] = {name: n.name}
})

console.log(obj)