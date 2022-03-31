const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  let findId = item => {
    return item.id === 2;
}

console.log(tasks.find(findId))