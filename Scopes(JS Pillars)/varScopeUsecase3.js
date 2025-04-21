var x=10;
function fun() {
    var x=20;
    console.log(x);
}
fun();
console.log(x);






// // var cannot be affected by blocks that's why x will be updated here
var x=30;
console.log("The value of x is:", x);
for(var x=1; x<3; x++){
    console.log(x);
}
console.log("x after loop is:", x);
