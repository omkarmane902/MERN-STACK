// Hoisting
// Hoisting is the process of moving declarations to the top of the execution context before code execution.
// All variable declarations are hoisted.
// Function declarations are also hoisted.
// Because of hoisting, functions can be called before their declaration.
// Example:
// JavaScript
// greet();

// function greet() {
//   console.log("Hello");
// }
// Variable Hoisting
// JavaScript
// console.log(a); // undefined
// var a = 10;
// JavaScript
// console.log(b); // ReferenceError
// let b = 20;
// JavaScript
// console.log(c); // ReferenceError
// const c = 30;