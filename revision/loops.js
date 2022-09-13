// Loops
// 1. For Loop
for (let i = 1; i < 20; i++) {
    // print the i value if divisible by 3 and 6
    if (i % 3 == 0 && i % 6 == 0) {
        console.log(i)
    }
}
console.log('\n\n\n')
// 2. While Loop
let j = 5;
while (j > 0) {
    console.log(j)
    j--;
}
console.log('\n\n\n')

// 3. Do While Loop
let k = 2;
do {
    console.log(k)
    k++;
} while (k < 2);

console.log('\n\n\n')
// 4. For In Loop
let obj = {
    name: 'Surendra',
    age: 23,
    rollNumber: 'R141692',
}
for (let i in obj) {
    console.log(i, '=', obj[i])
}
// TODO: 5. For Of Loop