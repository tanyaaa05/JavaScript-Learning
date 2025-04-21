function fun(...values){
    // ...values represent rest parameters
    console.log(values);
}

fun(10,20,30,40,50,60);







// Pattern (01).
function add(x,y) {
    console.log(x,y);
    return x+y;
}
console.log(add(10));


// Pattern (02).
function add(x,y=5) {
    console.log(x,y);
    return x+y;
}
console.log(add(10));


// Pattern (03).
function add(x,y=5) {
    console.log(x,y);
    return x+y;
}
console.log(add(10,20));


// Pattern (04).
function add(x,y=5,z) {
    console.log(x,y);
    return x+y+z;
}
console.log(add(10,20));


// Pattern (05).
function add(x,y=5,z) {
    console.log(x,y,z);
    return x+y+z;
}
console.log(add(10,20));



// Pattern (06).
function add(x,y=5,z) {
    console.log(x,y,z);
    return x+y+z;
}
console.log(add(10));


// Pattern (07).
function add(x,y=5,z) {
    console.log(x,y,z);
    return x+y+z;
}
console.log(add(10,20,30));


