// 🟢 Promise (in super simple words):
// A Promise is like a container for a future value.
// It says: "I promise to give you something later – either success or failure."

let myPromise = new Promise((resolve, reject) => {
 // Doing something (like fetching data)
 let success = true;

 if(success) {
  resolve("Here is your data!");
 }
 else {
  reject("Something went wrong!");
 }
});

myPromise.then((data) => {
 console.log("Runs if promise is successful: ");
 console.log(data);
}).catch((error) => {
 console.log("Runs if promise failed: ");
 console.log(error);
});





// 💡 Think of it like:
// > Ordering food online 🍔
// > - You place the order → (Promise is made)
// > - Food gets delivered → `resolve()`
// > - Restaurant cancels → `reject()`
