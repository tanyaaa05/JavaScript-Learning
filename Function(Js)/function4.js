function f(x) {
 console.log(x);
 x += 2;
 x -= 2;
 x *= 2;

 return x*10;
}
console.log(f(50));

function g(y) {
 console.log(y+2);
 let z = f(y);
 return z;
}

let ans = g(10);
console.log(ans);







// Here if we do not return anything manually from the function
// then JS will automatically return undefined.
function test() {
 let x=90;
 x += 2;
 // return x;
}
console.log(test());

