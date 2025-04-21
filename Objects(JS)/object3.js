// Objects and Arrays are mutable in JavaScript.
let student = {
 name: "Tanya",
 sec: "C",
 role: "IT Sales Executive"
}
console.log(student);

student.role = "Software Developer";
console.log(student);




let numbers = [1, 2, 3];
console.log(numbers);

numbers.push(4);
numbers.unshift(50);
console.log(numbers);


// Primitive values (like string, number, boolean) are immutable — you cannot change them directly.
let name = "Alice";
name[0] = "B";  // Trying to change first letter
console.log(name);



// 💡 In simple words:
// You can replace a whole string, but you can’t change just one letter in it like you can with arrays.
let name2 = "Alice";
name2 = "B" + name2.slice(1);  // Replace first letter with 'B'
// name.slice(1) takes everything from index 1 onward from "Alice", which is: "lice"

console.log(name2);




