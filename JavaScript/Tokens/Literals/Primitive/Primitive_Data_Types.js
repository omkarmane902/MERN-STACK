//! Number 
// The Number data type is used to store numeric values (integers and decimal numbers).



// 25 → Integer Number
// 99.99 → Decimal Number
// -10 → Negative Number


// console.log(Infinity);
// console.log(-Infinity);

//? Range
// -(2^53)-1 to (2^53)-1


//! BigInt
// BigInt is a primitive data type used to store very large integers that are bigger than the safe range of the Number type.


// how to declar bigInt

// let a = 99999999999999999999999999999999999999999999n;

// console.log(a);


//! Boolean

// Boolean is a primitive data type that can have only two values:

// true
// false

//! String


// A String is a primitive data type used to store text (characters).
// Strings can be written using:

// Single quotes ' '
// Double quotes " "
// Backticks ` ` (Template Literals)


//! Yes. String Interpolation (${}) allows you to use:

// | Inside `${}`          | Allowed? | Example                            |
// | --------------------- | -------- | ---------------------------------- |
// | Variables             | ✅        | `${name}`                          |
// | Expressions           | ✅        | `${a + b}`                         |
// | Function/Method Calls | ✅        | `${name.toUpperCase()}`            |
// | Ternary Operators     | ✅        | `${age >= 18 ? "Adult" : "Minor"}` |
// | Object Properties     | ✅        | `${person.name}`                   |


//? Interpolation 
// allows you to write variable ,conditional statement (only ternary operator) and looping statement (like map() ,filter(),reduce() etc )


// let name = "omkar";
// let age  = "21";

// let fullName = `hi my selfe ${name} and age is ${age}`;

// console.log(fullName);

//! null

//null means empty 
// we can explictiy keep the variables null that that can be reintialize feature.

// let companyname = null;
// companyname = "walstar tech";
// console.log(companyname);


//! undefine 

// it means variable is declared but it is not initialized with any value 
//  let str ;
//  console.log(str);  //undefine

//  if we try to access any variable without it's initialiization we will get undefine  
 

//NAN 
// will gen NaN when we try to performe arithematic operation between NaN numberic



//! Symbol

// Symbol is used to uniqualy indefintify  two different values

// Symbol can never be the same

let a = 10;
let b = 10 ;

console.log(a==b);  //true 


let c = Symbol(10);
let d = 10;

console.log(c==d);  // false









