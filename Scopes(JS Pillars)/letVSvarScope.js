// pattern(01):
function fun() {
 console.log(x);
 var x=20;
 console.log(x);
}
fun();







// pattern(02):
function fun2() {

    // console.log(x);  // --> throws error bcs we cannot access them
    // before their declaration and which is also called Temporal Deadzone (TDZ)
    // that is the region before the declaration of a block scoped variable.
    let y=50;
    console.log("Here the value of y is:", y);
}
fun2();







// pattern(03):
function fun3() {
 // console.log(x); // --> TDZ
 let z;
 y=5;
 console.log("Here The value of y is: ", y);
 console.log(z);
}
fun3();









// pattern(04):
function fun4() {
 // console.log(x); // --> TDZ
 // const z; // -->  This part throws error due to missing initializer in const declaration.
 y = 500;
 console.log("Here The value of y is:", y);
 // console.log(z);
}
fun4();







// pattern(05);
function fun5() {
 let z;
 y = 40;

 // let y = 10; // -->  This part throws error bcs let doesn't allow redeclaration of a variable

 console.log(z);
 console.log("Here the value of y is:", y);
}
fun5();


