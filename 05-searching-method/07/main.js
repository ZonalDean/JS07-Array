const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

let updateTask = (id, newName) => {
    for (let obj of tasks) { // for loop going through each object
        if (obj.id === id) { // if object = id
            obj.name = newName // change object.name to newName
        }
    }
}

updateTask(2,'Travelling')
console.log(tasks)