
//! Comparison operators are used to compare two values. They return either true or false.

// | Operator | Meaning                          | Example     | Result  |
// | -------- | -------------------------------- | ----------- | ------- |
// | `==`     | Equal to (value only)            | `5 == "5"`  | `true`  |
// | `===`    | Strict equal to (value and type) | `5 === "5"` | `false` |
// | `!=`     | Not equal to                     | `5 != 3`    | `true`  |
// | `!==`    | Strict not equal to              | `5 !== "5"` | `true`  |
// | `>`      | Greater than                     | `10 > 5`    | `true`  |
// | `<`      | Less than                        | `5 < 10`    | `true`  |
// | `>=`     | Greater than or equal to         | `10 >= 10`  | `true`  |
// | `<=`     | Less than or equal to            | `5 <= 10`   | `true`  |


// == compares only the value.
// === compares both value and data type.


let a = 10 ;
let b ="10";

console.log(a==b);

console.log(a===b);
