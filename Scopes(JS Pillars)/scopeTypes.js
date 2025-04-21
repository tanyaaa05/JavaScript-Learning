// Global Scope exm
let x = 10;

function fun(){
    console.log(x);
}

function gun() {
    for(let i=0;i<x;i++){
        console.log(i);
    }
}

fun();
gun();

console.log("value of x is:", x);








// // Function Scope exm
// function fun(){
//     let y = 20;
//     console.log(y);
// }

// function gun() {
//     for(let i=0;i<y;i++) {
//         console.log(i);  // y is not visible here
//     }
// }

// fun();
// gun();

// console.log("value of y is:", y);  // throws error bcs y is not visible here also









// Block Scope exm (This pair of curly brace is creating a new block.)
{
    let z=12;
    console.log("value of z is:", z); // here z is visible bcs we try to access it within the block
}
// we won't be able to access z, bcs it is defined inside a block,
// and due to that it has a block scope, hence it is not visible outside the block.
// console.log(z);
