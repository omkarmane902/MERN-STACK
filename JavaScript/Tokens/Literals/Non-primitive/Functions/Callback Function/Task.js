//! A Callback Function is a function that is passed as an argument to another function and is executed later.


//! Example 1: Simple Callback



function greet() {
    console.log("Hello, Om!");
}

function display(callback) {
    callback();
}

display(greet);


//! Example 2: Calculator

function add(a, b) {
    return a + b;
}

function calculate(a, b, callback) {
    console.log(callback(a, b));
}

calculate(10, 20, add);


//! Example 3: Arrow Function

const greet = () => {
    console.log("Welcome!");
};

const execute = (callback) => {
    callback();
};

execute(greet);



//! Example 4: Callback with Parameters


function checkEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

function processNumber(num, callback) {
    console.log(callback(num));
}

processNumber(7, checkEven);


//! Example 5: Using setTimeout()


setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);