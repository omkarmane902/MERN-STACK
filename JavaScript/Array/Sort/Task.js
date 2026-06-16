//! Task 1: Sort Numbers (Ascending)
// Given:
// const numbers = [5, 2, 8, 1, 9];
// Sort the numbers in ascending order.
//? Expected Output:
// [1, 2, 5, 8, 9]

const numbers = [5, 2, 8, 1, 9];

let num = numbers.sort((a,b)=>{
    return  a-b
})

console.log(num);




//! Task 2: Sort Numbers (Descending)
// Given:
// const numbers = [5, 2, 8, 1, 9];
// Sort the numbers in descending order.
//? Expected Output:
// [9, 8, 5, 2, 1]


const numberss = [5, 2, 8, 1, 9];

let nums = numberss.sort((a,b)=>{
    return b-a;
})

console.log(nums);


//! Task 3: Sort Strings (A–Z)
// Given:
// const fruits = ["Mango", "Apple", "Banana", "Orange"];
// Sort the fruits alphabetically.
//? Expected Output:
// ["Apple", "Banana", "Mango", "Orange"]


const fruits = ["Mango", "Apple", "Banana", "Orange"];


let asindingfruits = fruits.sort((a,b)=>{
    return a.localeCompare(b)
})

console.log(asindingfruits);


//! Task 4: Sort Strings (Z–A)
// Given:
// const fruits = ["Mango", "Apple", "Banana", "Orange"];
// Sort the fruits in reverse alphabetical order.
//? Expected Output:
// ["Orange", "Mango", "Banana", "Apple"]

const fruitss = ["Mango", "Apple", "Banana", "Orange"];

let fruitsss = fruitss.sort((a,b)=>{
   return b.localeCompare(a)
})

console.log(fruitsss);



// Task 5: Sort Student Marks
// Given
// const marks = [85, 45, 92, 60, 75];
// Sort the marks in ascending order.
// Expected Output:
// [45, 60, 75, 85, 92]

const marks = [85, 45, 92, 60, 75];

let mark = marks.sort((a,b)=>{
    return a - b
})
console.log(marks);


//! Task 6: Sort Employees by Salary
// Given:
// const employees = [
//     { name: "Om", salary: 30000 },
//     { name: "Rahul", salary: 45000 },
//     { name: "Neha", salary: 25000 }
// ];
//? Sort employees by salary (low to high).


const employees = [
    { name: "Om", salary: 30000 },
    { name: "Rahul", salary: 45000 },
    { name: "Neha", salary: 25000 }
];

let empsal = employees.sort((a,b)=>{
   
    return a.salary - b.salary
})

console.log(empsal);


//! Task 7: Sort Employees by Name
// Given:
// const employees = [
//     { name: "Rahul" },
//     { name: "Om" },
//     { name: "Neha" }
// ];
//? Sort employees by name (A–Z).

let emp = [
    { name: "Rahul" },
    { name: "Om" },
    { name: "Neha" }
];

let emps = emp.sort((a,b)=>{
    return a.name.localeCompare(b.name)
})

console.log(emps);

//! Task 8: Sort Products by Price
// Given:
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 }
// ];
// Sort products by price (highest to lowest).


const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];


let product = products.sort((a ,b)=>{
    return  b.price - a.price
})

console.log(product);
