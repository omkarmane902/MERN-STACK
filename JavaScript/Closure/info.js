// Closure
// Closure is a special memory allocation mechanism in JavaScript.
// It is created when a child function accesses variables from its parent function.
// A closure exists even if the parent function has finished execution and is removed from the call stack.
// Example:
// JavaScript
// function outer() {
//   let a = 10;

//   function inner() {
//     console.log(a);
//   }

//   inner();
//   console.log("Kuch To");
// }

// outer();
// Another Closure Example
// JavaScript
// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3
// inner() remembers the variable count even after outer() has completed execution.
// This behavior is called Closure.