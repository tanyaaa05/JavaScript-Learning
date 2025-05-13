// 🔒 Closure means:
// A function remembers the variables from where it was created,
// even if you run it somewhere else.

function fun(c,d) {
  let m=10;
  function gun() {
    let x=99;
    console.log("The value of m is:", m);
    console.log("The value of c is:", c);
    console.log("The value of d is:", d);
    console.log("Addition of m and c is: ", m+c);
  }
  return gun;
}

const g = fun(8,5);
g();

console.log(typeof(g));
console.dir(g);
