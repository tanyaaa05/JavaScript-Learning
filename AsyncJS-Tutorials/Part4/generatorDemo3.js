function* gen() {
    console.log("inside generator");
    const x = yield 10;
    // return 88;
    yield 100; 
    const y = x+30;
    yield y;
}

const it = gen();
console.log(it.next()); // {value: 10, done: false}
// some logic
console.log(it.next(11)); // {value: 41, done: true}
console.log(it.next()); // {value: undefined, done: true}
console.log(it.next()); // {value: undefined, done: true}
console.log(it.next()); // {value: undefined, done: true}