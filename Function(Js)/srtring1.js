const s1 = "Hello \nWorld";
console.log(s1);


const s2 = 'Hello \tWorld';
console.log(s2);


const str = "Ram said \"Gave me the code\" and the code is '12345' ";
console.log(str);


console.log("Tanya" + " " + "Singh"); // way 01: String concatenation -> It is an operation that
// creates a new string by combining the two given strings


// way 02
const firstName="Tanya";
console.log(firstName.concat(" ", "Singh"));

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());




const x1="Ta";
const x2="n";
const x3="ya";

console.log(x1,x2,x3);
let result = "";
result = result + x1 + x2 + x3;
console.log(result)
