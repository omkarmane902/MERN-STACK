//! An Anonymous Function is a function without a name.
//? It is often used as a function expression or passed as a callback.


//! Syntax

// function () {
//     // code
// }

//? Note: An anonymous function cannot be used alone. It is usually assigned to a variable or passed as an argument.

//! Example 1: Anonymous Function Expression


const greet = function () {
    console.log("Hello, World!");
};

greet();


//! Example 2: Anonymous Function with Parameters


const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));

Output:

30