const person = {
    name: 'Tanya',
    age: 22,
    graduate: false,
    greet: function (name) {
        console.log("Good Morning! " + name);
    }
}
console.log(person);

console.log(person.greet('Tanya.'));
