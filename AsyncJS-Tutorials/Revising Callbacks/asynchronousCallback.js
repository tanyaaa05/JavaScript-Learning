console.log("Start");
setTimeout(function f() {
    console.log("Timer done 1");
}, 3000);
setTimeout(function f() {
    console.log("Timer done 2");
}, 10);

console.log("End");
for(let i = 0; i < 1000000000; i++) {}
   


// setTimeout(function f() {
//     console.log('Start');
// }, 10000);

// setTimeout(function g() {
//     console.log('End');
// }, 500);

// let x = 0;

// for(let i = 0; i < 1000000000; i++) {
//     x = x + i;
// }