// JavaScript Code
//        │
//        ▼
// HTML File
//        │
//        ▼
// Browser Loads HTML
//        │
//        ▼
// HTML Parser
//        │
//        ▼
// Finds <script> Tag
//        │
//        ▼
// JavaScript Engine (V8)
//        │
//        ▼
//      Parser
//        │
//        ▼
// Abstract Syntax Tree (AST)
//        │
//        ▼
// JIT (Just-In-Time) Compiler
//        │
//        ▼
// Interpreter (Ignition)
//        │
//        ▼
// Optimizing Compiler (TurboFan)
//        │
//        ▼
// Machine Code
//        │
//        ▼
// Execution (Memory + Call Stack)
//        │
//        ▼
// Browser Output (Console / Web Page)




//! Step-by-Step Explanation
// 1. JavaScript Code
// let a = 10;
// let b = 20;

// console.log(a + b);

// ⬇️

//! 2. HTML File
// <!DOCTYPE html>
// <html>
// <head>
//     <title>JavaScript</title>
// </head>
// <body>

// <script src="script.js"></script>

// </body>
// </html>

// The browser finds the <script> tag and loads the JavaScript file.

// ⬇️

//! 3. Browser

// The browser sends the JavaScript code to the JavaScript Engine (for example, Chrome uses the V8 engine).

// ⬇️

//! 4. Parser

// The parser checks the code for syntax errors.

// Example:

// let a = 10;

// If there are no syntax errors, it continues.

// ⬇️

//! 5. Abstract Syntax Tree (AST)

// The parser converts the code into an Abstract Syntax Tree (AST), which represents the structure of the program.

// Example:

// let a = 10;

// Simplified AST:

// Program
//  │
//  └── VariableDeclaration
//       │
//       ├── Identifier → a
//       └── Literal → 10

// ⬇️

//! 6. JIT (Just-In-Time) Compilation

// The V8 engine uses Just-In-Time (JIT) compilation, which compiles code while the program is running instead of compiling everything in advance.

// ⬇️

//! 7. Interpreter (Ignition)

// The Ignition interpreter quickly converts the AST into bytecode and starts executing it immediately.

// AST
//    │
//    ▼
// Bytecode

// ⬇️

//! 8. Optimizing Compiler (TurboFan)

// If some code runs many times (called hot code), TurboFan optimizes it into efficient machine code for better performance.

// Bytecode
//     │
//     ▼
// TurboFan
//     │
//     ▼
// Optimized Machine Code

// ⬇️

//! 9. Execution

// The engine executes the machine code using:

// Memory Heap → Stores objects and variables.
// Call Stack → Executes functions.

// ⬇️
// 10. Output
// console.log(a + b);

//! Output:

// 30

