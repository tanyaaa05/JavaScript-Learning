function isEvenOrOdd(x) {
    if(x%2==0) {
        // if x is divisible by 2
        return "Even";
    }
    else {
        return "Odd";
    }
}

const ans = isEvenOrOdd(79);
console.log(ans);
