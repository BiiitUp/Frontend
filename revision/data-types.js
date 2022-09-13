// number, string and boolean are primitive data types
// object is a reference data type

// Primitive data types
let name = "Surendra"
let age = 23;
let isMale = true;
let rollNumber = 'R141692'

// Reference data types
let obj = new Object();
obj.name = name;
obj.age = age;
obj.rollNumber = rollNumber;
obj.isMale = isMale;
obj['is Good Boy'] = false;
console.log(obj)
console.log(obj.name)
console.log(obj['age'])
console.log(obj['is Good Boy'])

// Get Object Keys
console.log(Object.keys(obj))
// Get Object Values
console.log(Object.values(obj))

for (let i in obj) {
    const element = obj[i]
    console.log(i, '=', element) // 
}


// Arrays - Reference data type
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Array', arr)
// Pushing
arr.push(11)
console.log('Pushing', arr)
// Retrive
console.log('Retrive', arr[arr.length - 1])
// Pop
arr.pop()
console.log('Pop', arr)
// Shift
arr.shift()
console.log('Shift', arr)
// Unshift
arr.unshift(0)
console.log('Unshift', arr)
// Splice
arr.splice(2, 0, 2.5)
console.log('Splice', arr)

arr.splice(3, 2, 3.5, 3.75)
console.log('Splice', arr)
// Slice
console.log('Slice', arr.slice(2, 5))
console.log('Slice', arr)
// Sort
console.log('Sort', arr.sort())
// Reverse