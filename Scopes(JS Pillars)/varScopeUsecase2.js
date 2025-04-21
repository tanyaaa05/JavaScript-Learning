var x=10;
if(true) {
    var x=20;
    var y=30;
    console.log(x,y);
}
console.log(x,y);












var x = 10;
console.log(x, y);

// Start of an if block (this block will always run because the condition is true)
if (true) {
  // Re-declare "x" and assign it the value 20
  // Since "var" is function or global scoped, this will overwrite the previous value of "x"
  var x = 20;

  // Declare a new variable "y" and assign it the value 30
  // "y" is now available in the entire function/global scope due to "var"
  var y = 30;
  console.log(x, y);
}


console.log(x, y);

