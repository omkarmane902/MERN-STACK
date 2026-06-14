// Temporal Dead Zone (TDZ)
// It is the time between variable declaration and initialization.
// Variables declared using let and const are in the Temporal Dead Zone.
// Variables declared using var do not have a Temporal Dead Zone.
// Example:
// JavaScript
// console.log(a); // Error

// let a = 10;
// Variables inside the TDZ cannot be accessed.
// Attempting to access them results in a ReferenceError.