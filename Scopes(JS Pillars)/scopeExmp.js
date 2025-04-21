var currentStudent = "Tanya";
console.log("Start");

// This would throw an error if uncommented, since "bestFriend" is not defined yet
// console.log(bestFriend);

function updateStudentInfo() {
 // Local variable scoped to this function
 var currentStudentLocal = "Tarang";

 // Implicit global variable (not declared with var/let/const)
 bestFriend = "Mohit";

 // Log the relationship using local and global variables
 console.log(`The best friend of ${currentStudentLocal} is ${bestFriend}!`);
}

updateStudentInfo();

