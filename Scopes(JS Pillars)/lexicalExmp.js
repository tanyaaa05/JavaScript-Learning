// 👉 Lexical scoping means:
// "Where a variable is available depends on where it was written in the code."

var teacher = "Gaurav Sir"; // LHS --> we are assigning it a value.
function fun() {
    var teacher = "Sanket Sir"; // LHS --> we are assigning it a value.
    console.log("Hello,", teacher); // RHS --> we are consuming the value of the variable.

    function gun() {
        var student = "Tanya,";
        console.log("Hey!", student, teacher);
    }
    gun();
}

fun();
console.log("Hello,", teacher);







var a = 10;
function f() {
    var a = 20;
    console.log(a);

    function g() {
        var b = 30;
        console.log(b,a);
    }
    g();
}

f();
console.log("Value of a is: ", a);

