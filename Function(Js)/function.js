// (01). In JS, functions are first class citizen
// (02). In JS functions can be returned from a function and function can be passed
// as an argument to another function
// (03). using the below syntax we can define our function or blackbox

function greetingToEveryone(){
    console.log("My logic line 1");
    console.log("My logic line 2")
    console.log("My logic line 3")
    console.log("My logic line 4")
    console.log("My logic line 5...")
}

greetingToEveryone(); // calling our function
greetingToEveryone();





// function ke andar function return karna exm
function somefunction(){
    //Computation
    return function x(){
        return 10;
    }
}
console.log(somefunction());



function anotherfunction(f1){
    f1();  // we expect a function in f1
    console.log("called f1");
}

function hello(){
    console.log("hello");
}

anotherfunction(hello);  // Passing the function 'hello' as an argument, not calling it



// Here, calling the function 'hello' and passing its result to 'anotherFunction'
// anotherfunction(hello());  --> This line is equivalent to line 45 and 46
// let x = hello();
// anotherfunction(x);


