// Logical AND
console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log(true && true);

console.log((3<5) && (7>5));
console.log((3<5) && (7<5));


// Logical OR
console.log(false || true);
console.log(true || false);
console.log(false || false);
console.log(true || true);

console.log((3<5) || (7>5));
console.log((3>5) || (7<5));


// Logical Not (unary operator)
console.log(!true);
console.log(!false);

let x=!(3 == '3');
console.log(x);


// Nullish Coalescing operator
let p = 0 ?? 10;
console.log(p);

let y = undefined ?? 90; // (x ?? y) --> if the value of x is null/undefined then it will return y else returns x.
console.log(y);

let z = 60 ?? 90;
console.log(z);

let a = null ?? 90; // (x ?? y) --> if the value of x is null/undefined then it will return y else returns x.
console.log(a);









