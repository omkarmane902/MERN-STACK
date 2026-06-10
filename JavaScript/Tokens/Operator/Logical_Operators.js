//! Logical operators are used to combine or evaluate multiple conditions. They return true or false.

// | Operator | Name        | Example           |            |        |   |         |
// | -------- | ----------- | ----------------- | ---------- | ------ | - | ------- |
// | `&&`     | Logical AND | `a > 5 && b < 10` |            |        |   |         |
// | `        |             | `                 | Logical OR | `a > 5 |   | b < 10` |
// | `!`      | Logical NOT | `!(a > 5)`        |            |        |   |         |


//! 1. Logical AND (&&)

// Returns true only if both conditions are true.

// let age = 20;
// let hasLicense = true;

// console.log(age >= 18 && hasLicense);

//? Output:
// true



//! 2. Logical OR (||)

// Returns true if at least one condition is true.

// let age = 16;
// let hasPermission = true;

// console.log(age >= 18 || hasPermission);

//? Output:
// true


//! 3. Logical NOT (!)

// Reverses the result.

// let isLoggedIn = false;

// console.log(!isLoggedIn);

//? Output:
// true


//! Real-Life Example

let username = "omkar";
let password = 12345;

if( username == "omkar" && password == 12345){
   console.log("Login Successful");
   
}





