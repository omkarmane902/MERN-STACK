//! Task 1: Greeting Callback (Easy)
// Create a function:
// greet(name)
// It should return:
// Hello, Om!

let name =(callback)=>{
    console.log(`Hello ${callback()}`);
    
}

let callback =()=>{
    return 'omkar'
}
name(callback)




//! Task 2: Calculator

// Create four functions:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// Create a Higher-Order Function:

// calculate(a, b, operation)
// Example
// calculate(10, 20, add);


let  add = (a,b)=>{
    console.log(a + b);
    
}

let  subtract = (a,b)=>{
    console.log(a - b);
    
}

let  multiply = (a,b)=>{
    console.log(a * b);
    
}

let  divide = (a,b)=>{
    console.log(a / b);
    
}



let calculate =( a,b,operation)=>{
 
   return operation(a,b);
     
}

calculate(10,20 , add);

calculate(10,20 , subtract);

calculate(10,20 , multiply);

calculate(10,20 , divide);




//! Task 4: Even or Odd
// Create:
// checkEven(num)
// Create:
// processNumber(number, callback)
// Example
// processNumber(10, checkEven);
// Output:
// Even





let checkEven=(num)=>{
console.log(num%2===0 ? `This is even number ${num}`:`This is not even number ${num}`);
}


let checkodd=(num)=>{
console.log(num%2 !==0 ? `This is odd number ${num}`:`This is not odd number ${num}`);
}


let  processNumber=(num , fun )=>{
    return fun(num)
}


processNumber(7 , checkodd);





