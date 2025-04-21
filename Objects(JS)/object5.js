// Object.defineProperty() is used to add or change a property in an object with special rules.
// You can manually control them by using:
// Can the value change? (writable)
// Will it show in loops? (enumerable)
// Can it be deleted or modified? (configurable)
const user = {};
console.log(user);


// This method takes first argument as object, second argument
// as the key which we want to work on and then third argument
// is a new object which has 'Configurable' and 'Writable' booleans ...
Object.defineProperty(user, "name", {
  value: "Alice",
  writable: true,  // ✅ can be change
  enumerable: true,  // ✅ Shows in loops
  configurable: false  // ❌ Cannot delete or modify descriptor
});

console.log(user);
user.name = "Bob";  // ✅ can modify(writable)
delete user.name;  // ❌ No effect(Not configurable)

console.log(user);
