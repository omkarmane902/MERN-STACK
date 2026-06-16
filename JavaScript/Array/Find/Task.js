// Task 1: Find an Even Number
// Given:
// const numbers = [1, 3, 5, 8, 10];
// Find the first even number.
//? Expected Output:
// 8

const numbers = [1, 3, 5, 8, 10];

let evennum = numbers.find((num)=>{
   return num % 2 ===0;
});

console.log(evennum);


//! Task 2: Find a Number Greater Than 50
// Given:
// const numbers = [10, 20, 45, 60, 80];
// Find the first number greater than 50.
//? Expected Output:
// 60

const numberss = [10, 20, 45, 60, 80];

let greter = numberss.find((num)=>{
    return num > 50
})

console.log(greter);


//! Task 3: Find a Fruit
// Given:
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// Find "Mango".
//? Expected Output:
// Mango

const fruits = ["Apple", "Banana", "Mango", "Orange"];
let findfruits = fruits.find((val)=>{

    return val ==="Mango"
})

console.log(findfruits);

//! Task 4: Find an Adult
// Given:
// const ages = [12, 15, 17, 20, 25];
// Find the first age that is 18 or above.
//? Expected Output:
// 20

const ages = [12, 15, 17, 20, 25];

let firstage = ages.find((num)=>{

    return num > 18
})

console.log(firstage);



// Task 5: Find a Student
// Given:
// const students = [
//     { id: 1, name: "Om" },
//     { id: 2, name: "Rahul" },
//     { id: 3, name: "Neha" }
// ];
// Find the student with id = 2.
// Expected Output:
// { id: 2, name: "Rahul" }

const students = [
    { id: 1, name: "Om" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Neha" }
];

let student = students.find((array)=>{

    return array.id === 2
})

console.log(student);


//! Task 6: Find an Employee
// Given:
// const employees = [
//     { id: 101, name: "Om", salary: 30000 },
//     { id: 102, name: "Rahul", salary: 45000 },
//     { id: 103, name: "Neha", salary: 50000 }
// ];
//? Find the employee whose salary is greater than 40000.



const employees = [
    { id: 101, name: "Om", salary: 30000 },
    { id: 102, name: "Rahul", salary: 45000 },
    { id: 103, name: "Neha", salary: 50000 }
];


let gretersal = employees.find((arr)=>{
    return arr.salary > 40000 ;
})

console.log(gretersal);


