//! Task 1: Double the Numbers
// Given:
// const numbers = [1, 2, 3, 4, 5];
// Use map() to create a new array with each number multiplied by 2.
//? Expected Output:
// [2, 4, 6, 8, 10]



const numbers = [1, 2, 3, 4, 5];


const doubledNumbers = numbers.map((number) => {
    return number * 2; 
});


console.log(doubledNumbers);



//! Task 2: Square the Numbers

// Given:

// const numbers = [2, 4, 6, 8];

// Create a new array containing the square of each number.

//? Expected Output:

// [4, 16, 36, 64]



let arr = [2, 4, 6, 8];


let squareArr = arr.map((number)=>{
  
    return number*number;

})

console.log(squareArr);






//! Task 3: Convert to Uppercase

// Given:

// const fruits = ["apple", "banana", "mango"];

// Convert all names to uppercase.

//? Expected Output:

// ["APPLE", "BANANA", "MANGO"]


const fruits = ["apple", "banana", "mango"];


let UppercaseFruits = fruits.map((items)=>{

    return  items.toUpperCase()
})


console.log(UppercaseFruits);






//! Task 4: Add ₹ Symbol

// Given:

// const prices = [100, 200, 300];

// Convert each price into a string with the rupee symbol.

//? Expected Output:

// ["₹100", "₹200", "₹300"]

const prices = [100, 200, 300];


let  AddPrice = prices.map((number)=>{

    return `₹${number}`
})

console.log(AddPrice);


//! Task 5: Add 10 Marks
// Given:
// const marks = [50, 60, 70, 80];
// Add 10 to every mark.
//? Expected Output:
// [60, 70, 80, 90]


const marks = [50, 60, 70, 80];

let AddMarks = marks.map((number)=>{
    return number + 10
})

console.log(AddMarks);



//! Task 6: Get Student Names
// Given:
// const students = [
//     { name: "Om", age: 22 },
//     { name: "Rahul", age: 23 },
//     { name: "Neha", age: 21 }
// ];
// Create a new array containing only the student names.
//? Expected Output:
// ["Om", "Rahul", "Neha"]


const students = [
    { name: "Om", age: 22 },
    { name: "Rahul", age: 23 },
    { name: "Neha", age: 21 }
];


let names = students.map((arr)=>{
    return  arr.name;
})


console.log(names);





//! Task 7: Add a New Property

// Given:

// const employees = [
//     { name: "Om", salary: 30000 },
//     { name: "Rahul", salary: 40000 }
// ];

// Create a new array where every employee has:

// company: "Walstar Tech"

//? Expected Output:

// [
//   { name: "Om", salary: 30000, company: "Walstar Tech" },
//   { name: "Rahul", salary: 40000, company: "Walstar Tech" }
// ]





const employees = [
     { name: "Om", salary: 30000 },
    { name: "Rahul", salary: 40000 }
 ];



 let addcompany = employees.map((arr)=>{

    return {
        ...arr,company: "Walstar Tech"
    };
 })

 console.log(addcompany);
 


//! Task 8: Calculate GST

// Given:
// const prices = [100, 200, 300];
// Add 18% GST to each price.
//? Expected Output:
// [118, 236, 354]

const monay = [100, 200, 300];


let Gst =  monay.map((number)=>{

    return   number +( number *0.18)
})

console.log(Gst);



//! Task 9: Convert Names to Objects

// Given:

// const names = ["Om", "Rahul", "Neha"];

// Convert them into:

// [
//   { name: "Om" },
//   { name: "Rahul" },
//   { name: "Neha" }
// ]
     
const names1 = ["Om", "Rahul", "Neha"];

let CovertInObj = names1.map((namess)=>{

    return {
        Name:namess
    }
})

console.log(CovertInObj);




//! Task 10: Employee Bonus ⭐

// Given:

// const employees = [
//     { name: "Om", salary: 30000 },
//     { name: "Rahul", salary: 40000 },
//     { name: "Amit", salary: 50000 }
// ];

//? Create a new array where each employee gets a 10% bonus.



const employees1 = [
    { name: "Om", salary: 30000 },
    { name: "Rahul", salary: 40000 },
    { name: "Amit", salary: 50000 }
];


let AddBonus = employees1.map((arr)=>{

    return {
        ...arr, salary: arr.salary *1.10
}})


console.log(AddBonus);



//! Challenge Task ⭐⭐⭐

// Given:

// const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mouse", price: 500 },
//     { id: 3, name: "Keyboard", price: 1500 }
// ];

// Use map() to create a new array with:

// Product name in uppercase
// Price after adding 18% GST

//? Expected Structure:

// [
//   { name: "LAPTOP", price: 59000 },
//   { name: "MOUSE", price: 590 },
//   { name: "KEYBOARD", price: 1770 }
// ]



const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 }
];


let pupg = products.map((arr)=>{

    return {
        ...arr,
        name:arr.name.toUpperCase(),
        price: arr.price +(arr.price *0.18)
    }

})

console.log(pupg);
