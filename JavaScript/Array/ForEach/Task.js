//! Task 1: Print All Numbers
//Given:
// const numbers = [10, 20, 30, 40];
// Print each number.
//? Expected Output:
// 10
// 20
// 30
// 40

const numbers = [10, 20, 30, 40];

let prints = numbers.forEach((num)=>{

console.log(num);
})


//! Task 2: Print Square of Numbers
// Given:
// const numbers = [2, 4, 6, 8];
// Print the square of each number.
//? Expected Output:
// 4
// 16
// 36
// 64

const num = [2, 4, 6, 8];

let square = num.forEach((val)=> {
    console.log(val * val);
    
})


//! Task 3: Print Fruits
// Given:
// const fruits = ["Apple", "Banana", "Mango"];
// Print each fruit.
//? Expected Output:
// Apple
// Banana
// Mango

const fruits = ["Apple", "Banana", "Mango"];


let findfruits = fruits.forEach((val)=>{
    console.log(val);
    
})



// Task 4: Print Index and Value
// Given:
// const colors = ["Red", "Green", "Blue"];
// Print the index and value
// Expected Output:
// 0 Red
// 1 Green
// 2 Blue



const colors = ["Red", "Green", "Blue"];

let colorsindex = colors.forEach(( index, val)=>{
 console.log(index ,val);
 
})


//!  Task 5: Print Student Names
// Given:
// const students = [
//     { name: "Om", age: 22 },
//     { name: "Rahul", age: 23 },
//     { name: "Neha", age: 21 }
// ];
// Print only the student names.
//? Expected Output:
// Om
// Rahul
// Neha


const students = [
    { name: "Om", age: 22 },
    { name: "Rahul", age: 23 },
    { name: "Neha", age: 21 }
];

let  names = students.forEach((arr)=>{
console.log(arr.name);

})


//! Task 6: Print Employee Details
// Given:
// const employees = [
//     { id: 101, name: "Om", salary: 30000 },
//     { id: 102, name: "Rahul", salary: 45000 },
//     { id: 103, name: "Neha", salary: 50000 }
// ];
// Print:
// ID: 101, Name: Om, Salary: 30000
// ID: 102, Name: Rahul, Salary: 45000
// ID: 103, Name: Neha, Salary: 50000



const employees = [
    { id: 101, name: "Om", salary: 30000 },
    { id: 102, name: "Rahul", salary: 45000 },
    { id: 103, name: "Neha", salary: 50000 }
];


let Details = employees.forEach((arr)=>{
  
    console.log(arr);
    
})



//! Task 7: Print Even Numbers
// Given:
// const numbers = [1, 2, 3, 4, 5, 6];
// Use forEach() to print only the even numbers.
//? Expected Output:
// 2
// 4
// 6

const numberss = [1, 2, 3, 4, 5, 6];

let evennum = numberss.forEach((val)=>{
   if (val % 2 === 0) {
        console.log(val); 
    }
    
})


//! Task 8: Print Total Price
// Given:
// const prices = [100, 200, 300, 400];
// Use forEach() to calculate and print the total price
// Expected Output:
// 1000

const prices = [100, 200, 300, 400];
let sum = 0;
let total = prices.forEach((val)=>{

     sum += val; 
    
})

console.log(sum);



//! Task 9: Print Uppercase Names
// Given:
// const names = ["om", "rahul", "neha"];
// Print all names in uppercase.
//? Expected Output:
// OM
// RAHUL
// NEHA

const namess = ["om", "rahul", "neha"];

let UppercaseNames = namess.forEach((val)=>{
  console.log(val.toUpperCase());
  
})