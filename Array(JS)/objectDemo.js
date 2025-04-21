// Creating an object using object literal syntax
let obj = {
    id: 101,
    name: "Tanya",
    salary: 25000000
};
console.log(obj);


// Creating an empty object using 'new Object()' constructor
let emp = new Object();
console.log(emp);

// Adding properties to the emp object
emp.id = 102;
emp.name = "Shubh";
emp.salary = 15000000;
console.log(emp);


// Creating a function constructor to make employee objects
function employee(i, n, s, e) {
    this.id = i;
    this.name = n;
    this.salary = s;
    this.experience = e;
}

// Creating a new employee object using the emp2 constructor function
const e = new employee(103, "Muskan", 5000000, 4);
console.log(e);


// Accessing individual properties using dot notation
console.log(emp.id);
console.log(obj.name);


// Updating existing values of emp object
emp.salary = 50000000;
emp.id = 105;
emp.name = "Shubham Dhingra";
console.log(emp);

// You can also delete a property using:
delete emp.id;
console.log(emp);


