const pr = new Promise(function exec(res, rej) {
 console.log("Executor callback triggered by Promise constructor");
 const randomNumber = Math.floor(Math.random()*100);
 console.log(randomNumber);

 // random number is Even
 if(randomNumber%2 == 0) {
  res();
 }
 // random number is Odd
 else {
  rej();
 }

});

console.log("Created the promise object");
console.log(pr);
