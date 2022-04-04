let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // * alerts the array because 'this' refers to the array