// Auto Globals Concept used here for content
// To restrict Auto Globals --> "use strict";
var teacher = "Gurav Sir";
function fun() {
    teacher = "Sanket Sir";
    content = "JS";
    console.log("wow!", content, teacher);
}

fun();
console.log(teacher);
console.log(content);



// This part of code throws error
// console.log(teacher);   // --> Gaurav Sir
// console.log(content);   // --> error due to restriction of autoglobals here
// fun();












// // Without 'use strict', JavaScript allows automatic creation of global variables (i.e. auto globals).
// // If you want to prevent this behavior, you can use "use strict";

// // Declare a global variable "teacher" and assign it the value "Gaurav Sir"
// var teacher = "Gaurav Sir";

// function fun() {
//     // Change the value of the global variable "teacher" inside the function
//     teacher = "Sanket Sir";

//     // Create a new global variable "content" without declaring it (auto global in non-strict mode)
//     content = "JS";

//     // Print the values of "content" and "teacher" inside the function
//     console.log("wow!", content, teacher);
//     console.log("wow!", content, teacher);  // Same log again for repetition
// }

// // Call the function "fun" which modifies "teacher" and creates "content" globally
// fun();

// // Log the value of "teacher" outside the function (it is changed to "Sanket Sir")
// console.log(teacher);

// // Log the value of "content" outside the function (it was created globally inside "fun")
// console.log(content);  // This is available globally after being created in the function

// // The next lines would throw an error if "use strict" was enabled, because "content" was never explicitly declared.
// // Since we are not using "use strict", no error occurs and both variables are accessible globally.

// console.log(teacher);   // Output: "Sanket Sir" (value changed inside function)
// console.log(content);   // Output: "JS" (created globally in the function)

// // If we were using "use strict", this part of the code would throw an error because "content" would not be allowed as an auto global.


