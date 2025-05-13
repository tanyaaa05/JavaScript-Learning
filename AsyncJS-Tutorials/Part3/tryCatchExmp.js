let a = 5;
let b = 0;
try {
 let result = a / b; // dividing by zero
 console.log(result);
}
catch(error) {
 // 👉 What to do if error happens
 console.log("Oops! Something went wrong.", error);
}










// 💡 Think of it like:
// > You’re walking 🧍 and suddenly trip on a rock 🪨
// > That trip = **exception**
// > You handle it by getting up = **catching the exception**


// ✅ Simple Explanation:
// "try...catch is used to handle errors in JavaScript.
// I put the code that might break inside try,
// and if something goes wrong, catch helps me deal with it —
// without crashing the whole program."


