// Synchronous nature of Javascript
function h(x, fn) {
    // h-> is a H.O.F
    // fn-> callback
    console.log(x*x);
    fn();
}

h(10, function f() {
    console.log("Done with callback");
})

h(10,exec);

function exec(n) {
    console.log("Squared value is:", n);
}







// Asynchronous Nature of Javascript
console.log("Start");
setTimeout(function f() {
    console.log("Timer done 1");  // Timer is a runtime feature which is not a feature of JS
}, 30);
setTimeout( function f(){
    console.log("Timer done 2");    // Executing first due to Callback queue
}, 0);

console.log("End");
// Synchronous nature of Javascript
for(let i=0; i<10; i++) {
    console.log("Loop Executed");
}





