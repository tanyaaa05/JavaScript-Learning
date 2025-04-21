let arr = [10, 20, 30, 40, 50, "Tanya"];
console.log(arr);


arr.push(70, 80);  // Adds 70 and 80 to the end of the array
console.log(arr);


arr.pop();  // Removes the last element (80)
console.log(arr);


arr.shift();  // Removes the first element (10)
console.log(arr);


arr.unshift("Muskan");  // Adds "Muskan" to the beginning of the array
console.log(arr);


arr.reverse();  // Reverses the order of elements
console.log(arr);


console.log(arr.length);  // Prints the number of elements in the array → 7


console.log(arr.indexOf("Muskan"));  // Finds the index of "Muskan" → 6
console.log(arr.indexOf(200));       // 200 not found → returns -1
console.log(arr[2]);  // Prints the element at index 2 → 5


let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];
let a3 = a1.concat(a2);  // Combines a1 and a2 into a new array a3
console.log(a1);
console.log(a2);
console.log(a3);


let s = a3.join(' $ ');  // Joins all elements with ' $ ' between them (returns string)
console.log(s);


let t = a3.join(' ');  // Joins all elements with a space
console.log(t);


console.log(a3.indexOf(6));   // Finds index of 6 → 5
console.log(a3.indexOf(65));  // 65 not found → returns -1


let arr1 = [10, 20, 30, 40, 50, 60];
console.log(arr1.slice(2, 5));  // Returns a portion from index 2 to 4 → [30, 40, 50]


arr1.splice(2, 0, 11);  // At index 2, remove 0 items and insert 11
console.log(arr1);


arr1.splice(2, 3, 12, 15, 19);  // At index 2, remove 3 items and add 11 and 15
console.log(arr1);
