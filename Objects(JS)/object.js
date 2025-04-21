let product = {
 name: "Iphone 14 Pro",
 company: "Apple",
 price: 175000,
 waranty: "2 year",
 color: "Black",
}

// prints the whole object
console.log(product);

// returns an array of all the keys in an object.
console.log(Object.keys(product));

// prints the number of keys in the object
console.log(Object.keys(product).length);


// returns an array of all the values in an object.
console.log(Object.values(product));

// prints the number of values in the object (same as number of keys)
console.log(Object.values(product).length);


// returns an array of all the key-value pairs in an object.
console.log(Object.entries(product));

// prints the number of key-value pairs
console.log(Object.entries(product).length);
