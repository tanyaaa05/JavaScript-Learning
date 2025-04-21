const person = {
 name: "Tanya",
 age: 22
}
console.log(person);

person.age = 23;  // ✅ Allowed (Modifying property)
person.city = "Paris";  // ✅ Allowed (Adding new property)
console.log(person);

// Gives error bcs You cannot reassign a const object.
// person = {
//  name: "Shubh"
// }
// console.log(person);





// Object.seal() → Allows Modifications, But No Add/Delete
const car = {
 brand: "Toyota",
 model: "Camry"
};
console.log(car);
Object.seal(car);

car.model = "Corolla";  // Allowed(Can modify)
car.year = 2024;  // ❌ Not Allowed(Cannot add)
delete car.model;  // ❌ Not Allowed(Cannot delete)
console.log(car);

console.log(Object.isSealed(car));
console.log(Object.isFrozen(car));


// Object.freeze() → Fully Locked (No Changes at All)
const student = {
 name: "Tanya",
 university: "AKTU"
};
console.log(student);
Object.freeze(student);

student.name = "Alice";  // ❌ Not Allowed(Cannot modify)
student.year = 4;  // ❌ Not Allowed(Cannot add)
delete student.university;  // ❌ Not Allowed(Cannot delete)
console.log(student);

console.log(Object.isSealed(student));
console.log(Object.isFrozen(student));






// Object.preventExtensions(obj) prevents adding new properties
// but allows modifying or deleting existing ones.
const player = {
 name: "Ronaldo",
 age: 35
};
console.log(player);
Object.preventExtensions(player);

player.city = "San Francisco";  // ❌ Not Allowed(Cannot add new properties)
player.age = 40;  // ✅ Allowed(Can modify existing properties)
console.log(player);


delete player.age;  // ✅ Allowed(Can remove properties)
console.log(player);


