// 🚨 Exception: An exception is what happens when something goes wrong in your code.

function manualException() {
 const randomNumber = Math.floor(Math.random()*100);
 console.log("Printing the number is:", randomNumber);
 if(randomNumber%2 === 0 ) {
  // random number is even
  return randomNumber;
 }
 else {
  // random number is odd
  throw "Random number is odd"; // throw is used when you want to create your own error on purpose.
 }
}

// const ans = manualException();
// console.log(ans);







function caller() {
 try {
  console.log("This is risky");
  const response = manualException();
  console.log("Risky code working Fine:", response);
 }
 catch(exception) {
  console.log("Badluck we are in catch");
  console.log(exception);
 }
}
caller();













