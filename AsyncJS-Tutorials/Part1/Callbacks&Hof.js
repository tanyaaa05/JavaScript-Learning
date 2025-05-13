const arr = [1,2,3,4,5];

function myMap(arr, fn) {
    let result = [];  // Create a new array to store the results
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
}

console.log(myMap(arr, function g(element) {
    return element**2;
}));

console.log("Printing the index of the array is:", myMap(arr, function g(element, index) {
    return index;
}))
