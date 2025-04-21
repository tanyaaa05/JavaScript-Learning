// Type 01 --> Named function expression
const myFun = function fun(x) {
    console.log("calling...", x);
}

// to call the function defined in the variable
myFun(10);  // We can just give the variable name and pass the required args in the pair of parenthsis.






// Type 02 --> Anonymous function expression
const myGun = function (y) {
    console.log("calling...",y);
}

myGun(20);





// Type 03 --> Arrow function expression
const myRun = (z) => {
    console.log("calling...",z);
}

myRun(30);


// Type 04 --> IIFE (Immediately Invoked  Function Expression)
( function (a) {
    console.log("calling...",a);
})(50);


