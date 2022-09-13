// If Condition
// Switch Condition
let isUserLoggedInToTheApp = false;
if (isUserLoggedInToTheApp) {
    console.log('Yes you are logged in, please wait while we process your request.')
} else {
    console.log('No you are not logged in, please login to the app.')
}

// if else if
let age = 30
if (age < 18) {
    console.log('You are not eligible to vote')
} else if (age >= 18 && age <= 25) {
    console.log('You are eligible to vote')
} else {
    console.log('You are eligible to vote. But you need to wait for next election')
}

console.log('\n\n\n')
let level = 20;
switch (level) {
    case 1:
        console.log('Oh you just started on level 1')
        break;
    case 2:
        console.log('Nice you are on level 2')
        break;
    case 3:
        console.log('Wow, you are great you are on level 3')
        break;
    default:
        console.log('Please purchase the game')
}