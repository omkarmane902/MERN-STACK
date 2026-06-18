//! 1. push()

// Given:
// const fruits = ["Apple", "Banana"];
// Tasks
// Add "Mango" to the end.
// Add "Orange" and "Kiwi" together.
// Print the updated array.

const fruits = ["Apple", "Banana"];
fruits.push("Orange","Kiwi")

console.log(fruits);


//! 2. pop()
// Given:
// const colors = ["Red", "Green", "Blue", "Black"];
// Tasks
// Remove the last element.
// Store the removed element in a variable.
// Print the removed element and the updated array.

const colors = ["Red", "Green", "Blue", "Black"];

let store = colors.pop()

console.log(store);

console.log(colors);


//! 3. unshift()
// Given:
// const numbers = [20, 30, 40];
// Tasks
// Add 10 at the beginning.
// Add 5 and 0 together at the beginning.
// Print the array.

const numbers = [20, 30, 40];


numbers.unshift(0,5,10)

console.log(numbers);


//! 4. shift()
// Given:
// const cities = ["Mumbai", "Pune", "Delhi", "Goa"];
// Tasks
// Remove the first city.
// Store it in a variable.
// Print the removed city and the updated array.


const cities = ["Mumbai", "Pune", "Delhi", "Goa"];

let store1 = cities.shift()

console.log(store1);

console.log(cities);


//! 5. at()
// Given:
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// Tasks
// Get the first element.
// Get the last element using a negative index.
// Get the third element.

const fruitss = ["Apple", "Banana", "Mango", "Orange"];

let first = fruits.at(0)

let last = fruitss.at(fruitss.length -1)

let third = fruitss.at(2)


console.log(first,last ,third);



//! 6. concat()
// Given:
// const frontend = ["HTML", "CSS"];
// const backend = ["Node.js", "Express"];
// Tasks
// Combine both arrays.
// Add "MongoDB" using another array.
// Print the final array.


const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];



let fullstack = frontend.concat(backend);


console.log(fullstack);


//! 8. includes()
// Given:
// const languages = ["JavaScript", "Python", "Java", "C++"];
// Tasks
// Check if "Python" exists.
// Check if "React" exists.
// Print the result.


const languages = ["JavaScript", "Python", "Java", "C++"];

let check = languages.includes("Python")

let check1 = languages.includes("react.js")
console.log(check);

console.log(check1);


//! 9. indexOf()
// Given:
// const numbers = [10, 20, 30, 40, 50];
// Tasks
// Find the index of 30.
// Find the index of 100.
// Print the results.

const numberss = [10, 20, 30, 40, 50];


console.log(numberss.indexOf(30));

console.log(numberss.indexOf(100));


//! 10. lastIndexOf()
// Given:
// const numbers = [10, 20, 30, 20, 40, 20];
// Tasks
// Find the last index of 20.
// Find the last index of 50.

const num = [10, 20, 30, 20, 40, 20];


console.log(num.lastIndexOf(20));

console.log(num.lastIndexOf(50));



//! 11. length
// Given:
// const students = ["Om", "Rahul", "Neha", "Amit"];
// Tasks
// Print the total number of students.
// Print the last student using the length property.

const students = ["Om", "Rahul", "Neha", "Amit"];

console.log(students.length);

let laststudent = students[students.length-1]

console.log(laststudent);


//! 12. reverse()
// Given:
// const numbers = [1, 2, 3, 4, 5];
// Tasks
// Reverse the array.
// Print the first element after reversing.
// Print the entire reversed array.

const numbersss = [1, 2, 3, 4, 5];

console.log(numbersss.reverse());
console.log(numbersss[0]);


//! 13. slice()
// Given:
// const numbers = [10, 20, 30, 40, 50, 60];
// Tasks
// Get the first three elements.
// Get elements from index 2 to 5.
// Get the last two elements using a negative index.


const number = [10, 20, 30, 40, 50, 60];

console.log(number.slice(2,5));


//! 14. splice()
// Given:
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// Tasks
// Remove "Banana".
// Add "Kiwi" at index 2.
// Replace "Mango" with "Pineapple".
// Print the updated array.

//! array.splice(start_index, delete_count, item1, item2, ...);

const fruitsss = ["Apple", "Banana", "Mango", "Orange"];


let removed = fruitsss.splice(1,1)

console.log(fruitsss);

fruitss.splice(1,0,"Mango","Pineapple")
