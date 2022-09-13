let age = 18;

// If condition
let condition = age > 18;
console.log(condition);
if (condition) {
    console.log('You are allowed to Vote!');
}

// If-else condition
if (condition) {
    // Code execution
} else {
    console.log('You are not allowed to Vote!');
}

// If-else-if condition
if (condition) {
    // Code execution
} else if (age > 17) {
    console.log('Please register EC to get the Voter Id')
} else {
    console.log('You are not allowed to Vote!');
}
