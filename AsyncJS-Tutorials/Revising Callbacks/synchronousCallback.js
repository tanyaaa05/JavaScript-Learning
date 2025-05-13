function h(x, fn) {
    // h --> is a HOF
    // fn --> is a callback
    console.log(x*x);
    fn(x*x);
}

h(10, function() {
    console.log("Done with the callback");
})

h(10, exec)

function exec(n) {
    console.log("sqaured value is: ", n);
}