// There are 2 types of local scope ( Block , fuction )

// Your comment is almost correct. Here's the improved version:
 // There are two types of local scope in JavaScript: // 1. Block Scope


//? 2. Function Scope
// Explanation
//! 1. Block Scope

// Variables declared with let and const are only accessible inside the block ({}).

// {
//     let name = "Om";
//     const age = 25;

//     console.log(name); // Om
// }

// // console.log(name); // ❌ ReferenceError
//! 2. Function Scope

// Variables declared with var are accessible only inside the function where they are declared.

// function display() {
//     var city = "Sangli";

//     console.log(city); // Sangli
// }

// display();

// // console.log(city); // ❌ ReferenceError
// Quick Comparison
// Scope	Variables	Accessible In
// Block Scope	let, const	Inside {} only
// Function Scope	var	Inside the function only
// Interview Definition

// Local scope is a scope where variables are accessible only within a specific block or function. JavaScript has two types of local scope: Block Scope (let, const) and Function Scope (var).
