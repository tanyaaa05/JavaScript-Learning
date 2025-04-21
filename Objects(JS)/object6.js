// Can we make our own Object.seal ?
// Yes we can combine Object.preventExtensions and Object.defineProperty to make our own custom seal method. We can go to each key of the object and make it non deletable.

function customSeal(obj) {
 let keys = Object.keys(obj);
 for(let i=0; i<keys.length; i++) {
  Object.defineProperty(obj, keys[i], {configurable: false});  // this will stop deletion of key value pair
 }
 Object.preventExtensions(obj);  // This will stop addition of new key value pairs
}









// Can we make our own Object.freeze ?
// Yes we can combine Object.preventExtensions and Object.defineProperty to make our own custom freeze method. We can go to each key of the object and make it non deletable and non updatable.

function customFreeze(obj) {
 let keys = Object.keys(obj);
 for(let i=0; i<keys.length; i++) {
  Object.defineProperty(obj, keys[i], {configurable: false, writable: false});  // this will stop deletion of key value pair
 }
 Object.preventExtensions(obj);  // This will stop addition of new key value pairs
}
