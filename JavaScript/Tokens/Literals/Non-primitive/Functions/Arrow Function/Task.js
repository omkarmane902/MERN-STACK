//! Task 1: Greeting Function
//? Create an arrow function that prints:
// Hello, Om!

let name =(str)=>{

console.log(`hello ${str}`);
}
name("omkar")



// ! Task 2: Add Two Numbers
// Create an arrow function that returns the sum of two numbers.
// todo Example:
// add(10, 20);
// ? Output:
// 30


// let add =(num1 ,num2)=>{

//     console.log(num1 + num2);
    
// }

// add(10,20)





//! Task 3: Square of a Number
// Create an arrow function that returns the square of a number.
//todo Example:
// square(5);
//? Output:
// 25


let square =(num)=>{

    return num * num 
}

console.log(square(5));



//! Task 4: Check Even or Odd
// Create an arrow function that returns:
// "Even" if the number is even
// "Odd" if the number is odd
// Example:
// checkEvenOdd(7);
// Output:
// Odd


let checkEvenOdd=(num)=>{
     
   return num %2===0 ? 'Even' : 'odd';
}

console.log(checkEvenOdd(7));

//! Task 5: Find Largest Number
// Create an arrow function that returns the largest of two numbers.
//todo Example:
// findLargest(10, 25);
//? Output:
// 25


const findLargest=(num1 ,num2)=>{

    return Math.max(num1,num2);
}

console.log(findLargest(10,25));



//! Task 6: Check Voting Eligibility
// Create an arrow function that returns
// "Eligible" if age ≥ 18
// "Not Eligible" otherwise
//todo Example:
// checkVoting(20);
//? Output:
// Eligible


let checkVoting=(num)=>{
    return num >= 18 ? 'Eligible': 'Not Eligible';
}
console.log(checkVoting(20));


