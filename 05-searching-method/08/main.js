// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
// - execute deleteTask(1)

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

// let deleteTask = id => {
//     let result;
//     for (let obj of tasks) {
//         if (obj.id === id) {
//             result = obj.splice(id,2)
//         }
//     }
//     return result
// }

// ^ original
// new

const deleteTask = id => {
    //#1
    // return tasks.filter(task => task.id !== id);

    //#2
    const idx = tasks.findIndex(task => task.id === id)
    if (idx !== -1) {
        tasks.splice(idx, 1)
        return tasks
    }
};

console.log(deleteTask(2))