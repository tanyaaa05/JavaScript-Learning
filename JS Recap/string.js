let singleQuoteString = 'Hello World\n';

let doubleQuoteString = "Hello World, I am Tanya\n";

let backtickString = `Hello back world\n`;

console.log(singleQuoteString, doubleQuoteString, backtickString);



let greeting = "Hello, I'm Tanya\n";  // Throws error on using single quote here
console.log(greeting);

let saying = 'My friend said: "How are you doing?"\n ';  // Throws error on using double quote here
console.log(saying);

let multiLineString = `This is
first line
of my
text...\n` ;
console.log(multiLineString);

console.log(typeof(multiLineString));
