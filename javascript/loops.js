// Loops: for loop, while, do-while

// console.log('2 * 1 = 2')
for (let i = 1; i <= 10; i++) {
    //console.log(`${2} * ${i} = ${2*i}`) // ` back tick
    console.log(2 , '*', i , '=', 2 * i)
}

let table = 3;
let j = 1;
while (j <= 10) {
    console.log(table , '*', j , '=', table * j)
    j++;
}

console.log('\n', j)
// DO while
// do {
//     console.log('J Value: ', j)
//     j++;
//     if (j == 15) {
//         break;
//     }
// } while (j <= 20)

console.log('\n', j)
// DO while
do {
    j++;
    if (j == 15) {
        continue;
    }
    console.log('J Value: ', j)
} while (j <= 20)
