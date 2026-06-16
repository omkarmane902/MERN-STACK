//! Task 1: Sum of Numbers
// Given:
// const numbers = [10, 20, 30, 40];
// Find the total sum.
//? Expected Output:
// 100

const numbers = [10, 20, 30, 40];

let total = numbers.reduce((acc , num)=>{
  return acc+=num
},0)

console.log(total);



//! Task 2: Product of Numbers
// Given:
// const numbers = [2, 3, 4];
// Find the product of all numbers.
//? Expected Output:
// 24

 const numberss = [2, 3, 4];

 let product = numberss.reduce((acc , num)=>{

       return acc * num
 },1)

 console.log(product);




//! Task 3: Find the Largest Number
// Given:
// const numbers = [12, 45, 7, 89, 34];
// Find the largest number using reduce().
//? Expected Output:
// 89

const numbersss = [12, 45, 7, 89, 34];

let largestNum = numbersss.reduce((acc,num)=>{
        
    return num > acc ? num : acc ;
},numbersss[0])

console.log(largestNum);

 

//! Task 4: Find the Smallest Number
// Given:
// const numbers = [12, 45, 7, 89, 34];
// Find the smallest number.
//? Expected Output:
// 7


const numberssss = [12, 45, 7, 89, 34];

let smallestNum = numberssss.reduce(( acc , num)=>{
    return num < acc ? num : acc;
}, numberssss[0])


console.log(smallestNum);



//! Task 5: Total Marks
// Given:
// const marks = [80, 75, 90, 85];
// Find the total marks.
//? Expected Output:
// 330


const marks = [80, 75, 90, 85];


let  TotalMark = marks.reduce((acc ,num)=>{

    return acc + num;
},0);

console.log(TotalMark);



//! Task 6: Total Salary
// Given:
// const employees = [
//     { name: "Om", salary: 30000 },
//     { name: "Rahul", salary: 45000 },
//     { name: "Neha", salary: 50000 }
// ];
// Find the total salary.
//? Expected Output:
// 125000

const employees = [
    { name: "Om", salary: 30000 },
    { name: "Rahul", salary: 45000 },
    { name: "Neha", salary: 50000 }
];


let TotalSalary = employees.reduce(( acc , arr)=>{
   return acc + arr.salary;
},0);

console.log(TotalSalary);


//! Task 7: Count Total Employees
// Given:
// const employees = [
//     { name: "Om" },
//     { name: "Rahul" },
//     { name: "Neha" },
//     { name: "Amit" }
// ];
// Count the total number of employees using reduce().
// Expected Output:
// 4


const employeess = [
    { name: "Om" },
    { name: "Rahul" },
    { name: "Neha" },
    { name: "Amit" }
];


let counts = employeess.reduce((acc , emp)=>{
    return acc + 1;
},0)

console.log(counts);


//! Task 8: Count Passed Students
// Given:
// const students = [
//     { name: "Om", marks: 80 },
//     { name: "Rahul", marks: 30 },
//     { name: "Neha", marks: 90 },
//     { name: "Amit", marks: 20 }
// ];
// Count how many students have marks 35 or above.
//? Expected Output:
// 2


const students = [
    { name: "Om", marks: 80 },
    { name: "Rahul", marks: 30 },
    { name: "Neha", marks: 90 },
    { name: "Amit", marks: 20 }
];

let Passed = students.reduce(( acc , arr)=>{

    return  arr.marks >= 35 ? acc + 1 : acc;
},0)

console.log(Passed);


//! Task 9: Concatenate Strings
// Given:
// const words = ["I", "love", "JavaScript"];
// Create a single sentence.
//? Expected Output:
// I love JavaScript


const words = ["I", "love", "JavaScript"];

let str = words.reduce((acc , val )=>{
   return  acc + " " + val
},"")

console.log(str);



//! Challenge Task ⭐⭐⭐
// Given:
// const orders = [
//     { customer: "Om", amount: 500 },
//     { customer: "Rahul", amount: 700 },
//     { customer: "Om", amount: 300 },
//     { customer: "Neha", amount: 1000 },
//     { customer: "Rahul", amount: 200 }
// ];
// Using reduce():
// Find the total sales.
// Count the total number of orders.
// Create an object showing each customer's total spending.
// Expected Output:
// {
//   Om: 800,
//   Rahul: 900,
//   Neha: 1000
// }



const orders = [
    { customer: "Om", amount: 500 },
    { customer: "Rahul", amount: 700 },
    { customer: "Om", amount: 300 },
    { customer: "Neha", amount: 1000 },
    { customer: "Rahul", amount: 200 }
];

let TotalSpandCustomer = orders.reduce(( acc, arr)=>{

    if(!acc[arr.customer]){
      acc[arr.customer] = 0;
    }

    acc[arr.customer] += arr.amount;

   return acc
},{})

console.log(TotalSpandCustomer);



//! Bonus Challenge ⭐⭐⭐⭐
// Given:
// const products = [
//     { category: "Electronics", price: 50000 },
//     { category: "Electronics", price: 1500 },
//     { category: "Furniture", price: 10000 },
//     { category: "Furniture", price: 15000 },
//     { category: "Clothing", price: 2000 }
// ];
// Use reduce() to calculate the total price for each category.
//? Expected Output:
// {
//   Electronics: 51500,
//   Furniture: 25000,
//   Clothing: 2000
// }



const products = [
    { category: "Electronics", price: 50000 },
    { category: "Electronics", price: 1500 },
    { category: "Furniture", price: 10000 },
    { category: "Furniture", price: 15000 },
    { category: "Clothing", price: 2000 }
];

let SumOfProduct = products.reduce((acc , arr)=>{

    if (!acc[arr.category]) {
        acc[arr.category] = 0;

    }


    acc[arr.category] += arr.price

    return acc;
},{})

console.log(SumOfProduct);
