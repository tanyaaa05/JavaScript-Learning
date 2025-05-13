// 🟢 `.then` is used to **do something after a Promise is successful**.


let promise = new Promise((resolve, reject) => {
 resolve("Hello!");
});

promise.then((message) => {
 console.log(message); // 👉 This runs: prints "Hello!"
});





// 💡 Think of it like:
// > You **wait for your pizza** 🍕
// > When it comes → `.then` runs → you eat it 😄

// So `.then` = “**What to do next when things go right**”

