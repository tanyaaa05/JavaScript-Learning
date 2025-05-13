setTimeout(function f() {
    console.log("Hello");
}, 3000)

setTimeout(function g() {
    console.log("Hey Tanya!");
}, 500)

let x = 0;
for(let i=0;i<1000000000;i++) {
    x = x+i;
}

console.log("End");
