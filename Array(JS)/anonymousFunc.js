// Anonymous Function: A function without a name, stored in a variable
let x = function () {
    console.log("Hello...");
}
x();  // Calling the function using the variable name




// IIFE - Immediately Invoked Function Expression:
// This function runs immediately after it's defined
(function () {
    console.log("Tanya");
})();

// IIFE with a parameter
(function (y) {
    console.log(y * y);  // Square of the number passed
})(5);
