const p1 = new Promise((res,rej) => {
 setTimeout(() => {
  console.log("Timer p1 done");
  res(100);  // pending -> fulfilled; undefined -> 100
 }, 5000);
});


// p2 is a new promise
const p2 = p1.then(function f() {
 console.log("f")
}, function g() {
 console.log("g")
});


// p3 is also a new promisez
const p3 = p1.then(function h() {
 console.log("h")
}, function i() {
 console.log("i")
});

