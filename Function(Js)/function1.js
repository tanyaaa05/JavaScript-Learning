function isEvenOrOdd(x){
    // x -> parameter is the placeholder variable that
    // we mention during function definition.
    if(x%2==0){
        return "Even";
    } else{
        return "Odd";
    }
}
const ans = isEvenOrOdd(50);  // 70 -> arguments are actual values that
// you provide as input to the function while calling the function
console.log(ans);



function multiply(a,b){
    console.log(a,b);
    console.log(a*b);
}
multiply(10,2); // Here 10 and 2 are actual values
multiply(15,4);


function add(p,q) {
    console.log(p,q);
    console.log(p+q);
}
add(5,9);


function sub(u,v) {
    console.log(u,v);
    console.log(u-v);
}
sub(5,2);


function isPrime(num) {
    // Edge case
    if(num<=1) {
        return false;
    }

    for(let i=2;i<num;i++) {
        if(num%i == 0) {
            return "Not Prime";  // Found a divisor, so it's not prime
        }
    }
    return "Prime";  // No divisors found, it's prime
}

const ans2 = (isPrime(79));
console.log(ans2);

console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(10));



