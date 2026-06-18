//! Task 1: All Positive Numbers
// Given:
// const numbers = [10, 20, 30, 40];
// Check if all numbers are positive.
//? Expected Output:
// true


const numbers = [10, 20, 30, 40];

let num = numbers.every((val)=>{

    return val > 0
})

console.log(num);



//! Task 2: All Passed Students
// Given:
// const students = [
//     { name: "Om", marks: 80 },
//     { name: "Rahul", marks: 65 },
//     { name: "Neha", marks: 90 }
// ];
// Check if all students have marks ≥ 35.

const students = [
    { name: "Om", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Neha", marks: 90 }
];


let student = students.every((array)=>{
    return array.marks >= 35;
})

console.log(student);


//! Task 3: All Employees Have Salary
// Given:
// const employees = [
//     { name: "Om", salary: 30000 },
//     { name: "Rahul", salary: 45000 },
//     { name: "Neha", salary: 50000 }
// ];
//? Check if all employees have a salary greater than 20000.


const employees = [
    { name: "Om", salary: 30000 },
    { name: "Rahul", salary: 45000 },
    { name: "Neha", salary: 50000 }
];

let  emp = employees.every((array)=>{
   return array.salary >= 20000
})

console.log(emp);


//! Task 4: All Strings
// Given:
// const data = ["JavaScript", "HTML", "CSS"];
//? Check if every element is a string.

const data = ["JavaScript", "HTML", "CSS"];

let allStrings = data.every((element)=>{

    return typeof element === 'string'
}) 

console.log(allStrings);
