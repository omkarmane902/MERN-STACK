//! Task 1: Even Numbers
// Given:
// const numbers = [1, 2, 3, 4, 5, 6];
// Return only the even numbers.
//? Expected Output:
// [2, 4, 6]

const numbers = [1, 2, 3, 4, 5, 6];

let evennum = numbers.filter((num)=>{

    return num % 2===0
})

console.log(evennum);



//! Task 2: Odd Numbers

// Given:

// const numbers = [10, 15, 20, 25, 30];

// Return only the odd numbers.

//? Expected Output:

// [15, 25]

const numberss = [10, 15, 20, 25, 30];

let oddnum = numberss.filter((num)=>{

    return num % 2 !==0
})

console.log(oddnum);





//! Task 3: Numbers Greater Than 50

// Given:

// const numbers = [20, 40, 60, 80, 100];

// Return numbers greater than 50.

//? Expected Output:

// [60, 80, 100]


const numbersss = [20, 40, 60, 80, 100];


let greater = numbersss.filter((num)=>{

    return num > 50
})

console.log(greater);


//! Task 4: Adult Ages
// Given:
// const ages = [12, 18, 20, 15, 25];
// Return ages that are 18 or above.
//? Expected Output:
// [18, 20, 25]

const ages = [12, 18, 20, 15, 25];

let above = ages.filter((age)=>{
    return age>= 18;
})

console.log(above);



//! Task 5: Long Names
// Given:
// const names = ["Om", "Rahul", "Alexander", "Neha"];
// Return names with more than 4 characters.
//? Expected Output:
// ["Rahul", "Alexander"]


const names = ["Om", "Rahul", "Alexander", "Neha"];

let name = names.filter((Names)=>{
    return Names.length >= 4 ;
})

console.log(name);



//! Task 6: Expensive Products
// Given:
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 }
// ];
// Return products with a price greater than 1000.
//? Expected Output:
// [
//     { name: "Laptop", price: 50000 },
//     { name: "Keyboard", price: 1500 }
// ]


const products = [
     { name: "Laptop", price: 50000 },
     { name: "Mouse", price: 500 },
     { name: "Keyboard", price: 1500 }
 ];


let product = products.filter((pro)=>{
   
    return pro.price > 1000
})  

console.log(product);





//! Task 7: Employees with High Salary
// Given:
// const employees = [
//     { name: "Om", salary: 30000 },
//     { name: "Rahul", salary: 45000 },
//     { name: "Amit", salary: 25000 },
//     { name: "Neha", salary: 50000 }
// ];
// Return employees whose salary is more than 30000.

const employees = [
     { name: "Om", salary: 30000 },
     { name: "Rahul", salary: 45000 },
     { name: "Amit", salary: 25000 },
     { name: "Neha", salary: 50000 }
 ];


 let emp = employees.filter((employ)=>{

    return employ.salary > 30000
     
 })

 console.log(emp);
 


//! Task 8: Passed Students
// Given:
// const students = [
//     { name: "Om", marks: 80 },
//     { name: "Rahul", marks: 32 },
//     { name: "Neha", marks: 90 },
//     { name: "Amit", marks: 28 }
// ];
// Return students with marks ≥ 35.


const students = [
     { name: "Om", marks: 80 },
     { name: "Rahul", marks: 32 },
     { name: "Neha", marks: 90 },
     { name: "Amit", marks: 28 }
 ];

 let  mark = students.filter((arr)=>{

    return arr.marks >= 35
 })

 console.log(mark);
 




//! Task 9: Active Users
// Given:
// const users = [
//     { name: "Om", active: true },
//     { name: "Rahul", active: false },
//     { name: "Neha", active: true }
// ];
// Return only active users.
//? Expected Output:
// [
//     { name: "Om", active: true },
//     { name: "Neha", active: true }
// ]

const users = [
     { name: "Om", active: true },
     { name: "Rahul", active: false },
     { name: "Neha", active: true }
 ];


 let  active = users.filter((user)=>{

    return  user.active === true;

 })

 console.log(active);
 



