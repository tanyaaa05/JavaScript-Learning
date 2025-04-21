var teacher = "Gaurav Sir"; // LHS --> we are assigning it a value and it's a Formal Declaration
function fun() {
    var teacher = "Sanket Sir"; // LHS --> we are assigning it a value.
    console.log("Hello",teacher); // RHS --> we are consuming the value of the variable.

}



// function gun() {
//     var student = "Tanya";
//     console.log("Hey!", student);
// }   // part type(1) END

function gun() {
    var student = "Tanya,";
    console.log("Hey!", student, teacher);
}   // part type(2) END

fun();
gun();
console.log(teacher);



// Function scope
function run() {
    console.log("The value of x is:", x);  // Here x is being used before declaration and this code works, bcs the x has function scope due to var hence x is visible throughout the code.
    var x=10;
    console.log("The value of x is:", x);
}

run();
