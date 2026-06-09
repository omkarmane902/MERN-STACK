//! 1. The 3 Ways to Declare a Variable

//? const (Constant)
// Use this when the value inside the box will never change. Once you put something inside a const variable, you cannot lock a new value into it later.
// JavaScript

const pi = 3.14;

console.log(pi);

// pi = 329;

// console.log(pi);  // ❌ Error! You cannot change a const variable.


//? let
//! Use this when you want a flexible box where the value can change later.

let scroe = 0;

scroe = 10;
console.log(scroe);



//? var (Old Way)
//! This is the original keyword from 1995. Modern programmers avoid using it because it has quirky behaviors that can cause bugs in your code. Always stick to const and let.


var name = 'omkar';

name = 'mane'

console.log(name);
