// Function exm 01
function f(x){
  console.log(x);
  x+=2;
  x-=2;
  x*=2;

  return x*10;
}
f(5);


function g(y){
  console.log(y*2)
  let z=f(y);
  return z;
}

let ans=g(10);
console.log(ans);


// Function exm 02
function test(){
  let x=10;
  x+=2;
  // return x;
}

let ans1=test();
console.log(ans1);
// console.log(test());


// Function exm 03
function multiply(x,y=4,z) // Here 4 is the default parameter for y
 {
  console.log("Value of x is:", x);
  console.log("Value of y is:", y);
  console.log("Value of z is:", z);
  return x * y * z;
}
console.log(multiply(10,5,2));


