const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

// let updateTask = (id, newName) => {
//     for (let obj of tasks) { // for loop going through each object in array
//         if (obj.id === id) { // if object = id
//             obj.name = newName // change object.name to newName
//         }
//     }
// }

// ^ old
//new code is cleaner and more readable

let updateTask = (id,newName) => {
    const idx = tasks.findIndex(task => task.id === id); //looks for indext of array tasks, parameter is called task to specify singular
    if (idx !== -1) { // makes sure the inx is valid
        tasks[idx].name = newName; // changes the value of that index
    } else {
        alert('class with this id is not found') // alerts if bugged
    }
}

updateTask(2,'Travelling')
console.log(tasks)