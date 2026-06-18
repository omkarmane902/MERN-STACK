//! Task 1: Check Even Number
// Given:
// const numbers = [1, 3, 5, 8, 9];
// Check if at least one number is even.
//? Expected Output:
// true


const numbers = [1, 3, 5, 8, 9];

let  num = numbers.some(( value)=>{

    return value % 2 ===0;
})

console.log(num);



//! Task 2: Check Age
// Given:
// const ages = [12, 15, 18, 20];
//? Check if at least one person is 18 or older.

const ages = [12, 15, 18, 20];

let age = ages.some((val)=>{
 return val > 18;
})

console.log(age);


//! Task 3: Check Negative Number
// Given:
// const numbers = [10, 20, -5, 30];
//? Check if the array contains any negative number.

const numberss = [10, 20, -5, 30];

let nums = numberss.some((value)=>{
    return value < 0 ;
})

console.log(nums);






//! Task 4: Check Active User
// Given:
// const users = [
//     { name: "Om", active: false },
//     { name: "Rahul", active: true },
//     { name: "Neha", active: false }
// ];
//? Check if at least one user is active.


const users = [
    { name: "Om", active: false },
    { name: "Rahul", active: true },
    { name: "Neha", active: false }
];

let user = users.some((array)=>{
    return array.active = true;
})

console.log(user);


// Task 5: Check Expensive Product
// Given:
// const products = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Laptop", price: 60000 }
// ];
//? Check if any product costs more than 50000.

const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Laptop", price: 60000 }
];

let product = products.some((array)=>{

    return array.price > 70000;
})

console.log(product);
